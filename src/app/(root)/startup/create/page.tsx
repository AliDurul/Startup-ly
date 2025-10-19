import StartupForm from "@/components/StartupForm";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  // const user = await prisma.user.findUnique({
  //   where: { id: session.userId as string },
  // })

  // console.log(user);
  return (
    <>
      <section className="pink_container min-h-[230px]!">
        <h1 className="heading">Submit Your Startup</h1>
      </section>
      <StartupForm />
    </>
  );
};

export default Page;
