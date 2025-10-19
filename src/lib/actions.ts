'use server';

import { auth } from "./auth";
import { prisma } from "./prisma";
import { Category } from "@prisma/client";
import slugify from "slugify";
import { parseServerActionResponse } from "./utils";

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
                connect: { id: session.userId as string },
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
