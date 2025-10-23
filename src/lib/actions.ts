'use server';

import { auth } from "./auth";
import { prisma } from "./prisma";
import slugify from "slugify";
import { parseServerActionResponse } from "./utils";
import { revalidatePath } from "next/cache";

export const createPitch = async (
    prevState: any,
    formData: FormData,
    pitch: string
) => {

    const session = await auth();

    if (!session)
        return parseServerActionResponse({
            error: "Not signed in",
            status: "ERROR",
        });

    const { title, description, category, link } = Object.fromEntries(
        Array.from(formData).filter(([key]) => key !== "pitch"),
    );

    const slug = slugify(title as string, { lower: true, strict: true });

    try {
        const startupData = {
            title: title as string,
            description: description as string,
            category: category as string,
            image: link as string,
            slug,
            pitch,
            author: {
                connect: { id: session.user.id as string },
            },
        };

        const result = await prisma.startup.create({
            data: startupData,
        });

        return parseServerActionResponse({
            ...result,
            error: "",
            status: "SUCCESS",
        });
    } catch (error) {
        console.log(error);

        return parseServerActionResponse({
            error: JSON.stringify(error),
            status: "ERROR",
        });
    }
};

export const findStartupById = async (id: string) => {
    const startup = await prisma.startup.findUnique({
        where: { id },
        include: { author: true },
    });

    return startup;

};

export const findAllStartups = async (query: string) => {
    return await prisma.startup.findMany({
        include: { author: true },
        orderBy: { createdAt: "desc" },
        where: {
            OR: [
                { title: { contains: query, mode: "insensitive" } },
                { description: { contains: query, mode: "insensitive" } },
                { category: { contains: query, mode: "insensitive" } },
            ],
        },
    });
}

export const getStartUpViews = async (id: string) => {
    const startup = await prisma.startup.findUnique({
        where: { id },
        select: { views: true },
    });
    return startup?.views || 0;
};

export const incrementStartUpViews = async (id: string) => {
    const startup = await prisma.startup.update({
        where: { id },
        data: { views: { increment: 1 } },
        select: { views: true },
    });
    
    // Revalidate both the homepage and the specific startup page
    revalidatePath('/');
    // revalidatePath(`/startup/${id}`);
    
    return startup.views;
};

export const findUserById = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    return user;
};

export const findStartupsByAuthorId = async (authorId: string) => {
    const startups = await prisma.startup.findMany({
        where: { authorId },
        include: { author: true },
        orderBy: { createdAt: "desc" },
    });
    return startups;
};