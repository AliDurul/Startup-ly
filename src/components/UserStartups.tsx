import React from "react";
import StartupCard from "@/components/StartupCard";
import { findStartupsByAuthorId } from "@/lib/actions";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await findStartupsByAuthorId(id);

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: any) => (
          <StartupCard key={startup.id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
export default UserStartups;
