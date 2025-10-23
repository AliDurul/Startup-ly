import Ping from "@/components/Ping";
import { getStartUpViews, incrementStartUpViews } from "@/lib/actions";
import { after } from "next/server";

const View = async ({ id }: { id: string }) => {

  const totalViews = await getStartUpViews(id);

  after(async () => await incrementStartUpViews(id));


  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};
export default View;
