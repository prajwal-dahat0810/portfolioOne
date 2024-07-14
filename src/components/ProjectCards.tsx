import { MainHeading } from "./MainHeading";
import { useState } from "react";
import { ProjectCard, ProjectParameter } from "./ProjectCard";
import paytmLogo from "../images/Projectimg/paytmlogo.png";
import mediumLogo from "../images/Projectimg/medium.png";
export const ProjectCards = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const Projects: ProjectParameter[] = [
    {
      id: 0,
      title: "Paytm Project",
      imageUrl: paytmLogo,
      description:
        "I build a PayTM like application that let’s users send money to each other given an initial dummy balance",
      projectUrl: "https://github.com/prajwal-dahat0810/Paytm.git",
    },
    {
      id: 1,
      title: "Blogging  Website",
      imageUrl: mediumLogo,
      description:
        "Medium like blogging app. Use  in a serverless fashion, using cloudflare workers, prisma as the ORM, typescript as the language",
      projectUrl:
        "https://github.com/prajwal-dahat0810/Medium-blog-website.git",
      liveLink: "https://medium-blog-website-sigma.vercel.app/signup",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" bg-white relative  h-full w-full overflow-hidden">
      <div className="absolute     w-full  pt-3 h-1/6 flex  items-center justify-center text-center ">
        <MainHeading
          content={"PROJECTS"}
          style={
            "max-sm:text-lg tracking-widest font-outfit font-semibold text-3xl text-slate-600"
          }
          hasPopover={true}
          popoverContent={"mySkills"}
        />
      </div>
      <div
        className="w-full    top-[49%]  h-[1000px]   "
        id="animation-carousel"
        data-carousel="static"
      >
        <div className=" absolute w-full  h-97  bg-gradient-to-r top-[39%]  from-blue-500 opacity-70 dark:opacity-30  h-[557px] -skew-y-12 "></div>
        <div className="   relative h-56 top-[42%] `rounded-lg md:h-96 ">
          {Projects.map(
            ({ id, title, imageUrl, description, projectUrl, liveLink }) => {
              return (
                <div
                  key={id}
                  className={`absolute w-full transition-opacity duration-200 ease-linear ${
                    id === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  data-carousel-item={id === currentIndex ? "active" : ""}
                >
                  <ProjectCard
                    id={id}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                    currentIndex={currentIndex}
                    projectUrl={projectUrl}
                    liveLink={liveLink}
                  />
                </div>
              );
            }
          )}
        </div>

        <button
          type="button"
          className="absolute  top-[50%] md:left-[8%] lg:left-[10%] 2xl:left-[25.5rem] xl:left-[14.5rem]   start-0 z-30 flex items-center justify-center  px-4 cursor-pointer group focus:outline-none not-sr-only h-6"
          data-carousel-prev
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black/70 dark:bg-gray-800/30 group-hover:bg-white/10 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute  top-[50%]  w-15 md:right-[8%] right-0 lg:right-[13%] xl:right-[14.5rem]   2xl:right-[25.4rem]  h-5 z-30 flex items-center justify-center  px-4 cursor-pointer group focus:outline-none not-sr-only"
          data-carousel-next
          onClick={handleNext}
        >
          <span className="inline-flex   items-center border justify-center w-10 h-10 rounded-full bg-black/70 dark:bg-gray-800/30 group-hover:bg-white/10 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white  dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
