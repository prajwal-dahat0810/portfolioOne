import { Link } from "react-router-dom";
import paytmLogo from "../images/Projectimg/paytmlogo.png";
import mediumLogo from "../images/Projectimg/medium.png";
import { useState } from "react";

interface ProjectParameter {
  imageUrl?: string;
  title?: string;
  id: number;
  description?: string;
  projectUrl?: string;
}
[];
export const ProjectCard = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const Projects: ProjectParameter[] = [
    {
      id: 0,
      title: "Paytm Project",
      imageUrl: paytmLogo,
      description:
        "We’re building a PayTM like application that let’s users send money to each other given an initial dummy balance",
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
    <div className="w-[49%] h-4/6   max-sm:w-5/6">
      <div id="controls-carousel" className="relative  h-full w-full md:5/6 ">
        <div className="relative  min-h-56  h-full  left-[10%] w-4/5 overflow-hidden rounded-lg ">
          {Projects.map(
            ({
              imageUrl,
              id,
              title,
              description,
              projectUrl,
            }: ProjectParameter) => (
              <div
                key={id}
                className={`absolute block  w-full h-full transition-transform duration-700 ease-in-out ${
                  id === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  visibility: id === currentIndex ? "visible" : "hidden",
                }}
              >
                <div className="flex  flex-col">
                  <Link to={`${"projectUrl"}`}>
                    <div className="w-full min-h-80 ">
                      <img
                        src={imageUrl}
                        alt={`Carousel item ${id + 1}`}
                        className="block  w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex  flex-col">
                      <div className="text-xl  min-h-8 h-3/6  text-slate-700 font-medium bg-transparent flex items-center justify-center bottom-10">
                        {title}
                      </div>
                      <div className=" text-md px-3 py-2 h-3/6   leading-loose  text-slate-600 font-medium    bottom-10">
                        {description}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
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
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};
