import { MainHeading } from "./MainHeading";
import { ProjectCard } from "../components/ProjectCard";
export const ProjectCards = () => {
  return (
    <div className=" bg-white relative w-full h-screen overflow-hidden">
      <div className="absolute   w-full  md:pt-28 h-1/5 flex  items-center justify-center text-center  top-0">
        <MainHeading
          content={"PROJECTS"}
          style={
            "max-sm:text-lg tracking-widest font-outfit font-semibold text-3xl text-slate-600"
          }
        />
      </div>
      <div className="w-full absolute top-[27%] bg-gradient-to-r from-blue-500 opacity-70 dark:opacity-30 left-0 h-[500px] -skew-y-12"></div>
      <div className="w-full absolute top-56 left-[25%] py-4 h-full max-sm:left-[5%] ">
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
};
