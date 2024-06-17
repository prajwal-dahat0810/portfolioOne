import { Cards } from "../components/Cards";
import { MainHeading } from "../components/MainHeading";
import NavBar from "../components/NavBar";
import { ProjectCards } from "../components/ProjectCards";
import { SubHeading } from "../components/SubHeading";
import myImg from "../images/bg-baground.jpg";
import Work from "../components/Work";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
export type Parameter = {
  content: string;
  style?: string;
  imgLink?: string;
  description?: string;
};

const FirstRow = [
  {
    content: "Javascript",
    imgLink:
      "https://w7.pngwing.com/pngs/160/708/png-transparent-javascript-logo-javascript-logo-language-algorithm-app-3d-icon-thumbnail.png",
  },
  {
    content: "Typescript",
    imgLink:
      "https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png",
  },
  {
    content: "C++",
    imgLink:
      "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
  },
  {
    content: "Prisma",
    imgLink: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
  },
];
const SecondArray = [
  {
    content: "React",
    imgLink:
      "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
  },
  {
    content: "Next",
    imgLink: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    content: "Express",
    imgLink:
      "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
  },
];
const ThirdRow = [
  {
    content: "MongoDB",
    imgLink:
      "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
  },
  {
    content: "Postgres",
    imgLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMRP8cV7i9VhtX-DjvvoYt-6TY-gNakDNkw&usqp=CAU",
  },
];
const FourthRow = [
  {
    content: "Git",
    imgLink:
      "https://cdn.iconscout.com/icon/free/png-256/free-git-18-1175219.png?f=webp",
  },
];

export default function Landing() {
  return (
    <div className="w-full h-svh  ">
      <NavBar></NavBar>
      <div className="  bg-white md:pt-28 h-screen flex flex-col items-center justify-center text-center overflow-hidden pb-10 pt-52">
        <div className="relative flex  justify-center items-center border bg-green-300 border-black">
          <div className="absolute border dark:border-[#302e2e] border-[#8aa9eb] rounded-full lg:h-[300px] lg:w-[300px]  md:w-44 md:h-44 sm:w-44 sm:h-44 max-sm:h-44 max-sm:w-44 "></div>
          <div className="absolute border animate-grow-shrink  duration-100 dark:border-[#302e2e] border-[#8aa9eb] rounded-full h-[200px] w-[200px] sm:h-14w-14 "></div>
          <div className="absolute border dark:border-[#333333] border-[#94b695] rounded-full h-[500px] w-[500px] md:w-20h-20 xl:w-24h-24 sm:w-16h-16"></div>
          <div className="absolute border dark:border-[#333333] border-[#cccccc] rounded-full h-[800px] w-[800px] "></div>
        </div>
        <div className=" absolute   rounded">
          <div
            className={`  -z-50  rounded-full  xl:h-36 xl:w-36pl-3 pt-3  md:w-28  md:h-28 sm:h-28 sm:w-28 max-sm:w-20 pt-10 max-sm:h-20pt-0`}
          >
            <img
              src={myImg}
              alt=""
              className={`-z-50    rounded-full    md:w-28  md:h-28 sm:h-28 sm:w-28 max-sm:w-20 max-sm:h-20`}
            />
          </div>
        </div>
      </div>

      <div className=" absolute  w-full  md:pt-28 h-1/5 flex flex-col items-center justify-center text-center  bottom-48">
        <SubHeading
          content={"Full Stack Developer"}
          style={
            "max-sm:text-sm font-medium z-50  bottom-40  text-3xl text-slate-500 text-sm text-gray-800 dark:text-gray-400 uppercase  md:tracking-[15px] pb-2 font-outfit"
          }
        />
      </div>
      <div className="absolute   w-full  md:pt-28 h-1/5 flex flex-col items-center justify-center text-center  bottom-32">
        <MainHeading
          content={"PRAJWAL DAHAT"}
          style={"max-sm:text-lg  font-semibold text-6xl text-gray-400"}
        />
      </div>

      <div className="h-98 bg-white pb-28 ">
        <div className="relative">
          <div className="    h-full flex items-start justify-center w-full">
            <div className="  w-2/3 gap-6 h-3/5 flex items-center  pt-10 flex-col max-sm:h-full ">
              <div className="flex row gap-2 px-3 py-2 items-center text-white justify-center rounded-3xl bg-teal-400">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                >
                  <path d="M121.72 32a4 4 0 00-3.72 5.56l2.3 5.43 40.7 94.9a4 4 0 006.88.82L243 38.4a4 4 0 00-3.2-6.4zM419.93 58.06l-41.28 96.37a4 4 0 003.68 5.57h101a4 4 0 003.4-6.11L427 57.53a4 4 0 00-7.07.53zM85 57.57l-59.71 96.32a4 4 0 003.4 6.11h101a4 4 0 003.67-5.58L92 58.1a4 4 0 00-7-.53zM393.27 32H267.82a1.94 1.94 0 00-1.56 3.11l79.92 106.46a1.94 1.94 0 003.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 00-1.7-2.66zM239 448l-89.43-253.49A3.78 3.78 0 00146 192H25.7a3.72 3.72 0 00-2.95 6l216 279.81a5.06 5.06 0 006.39 1.37 5 5 0 002.39-6.08zM486.3 192H366a3.75 3.75 0 00-3.54 2.51l-98.2 278.16a5.21 5.21 0 002.42 6.31 5.22 5.22 0 006.61-1.39L489.25 198a3.72 3.72 0 00-2.95-6zM259.2 78.93l56 74.67a4 4 0 01-3.2 6.4H200a4 4 0 01-3.2-6.4l56-74.67a4 4 0 016.4 0zm-7 310.31l-67.7-191.91a4 4 0 013.77-5.33h135.46a4 4 0 013.77 5.33l-67.73 191.91a4 4 0 01-7.54 0z" />
                </svg>
                <div>Let's Start</div>
              </div>
              <MainHeading
                content={"CODE : SKILLS"}
                style={
                  "max-sm:text-lg  font-mono font-semibold text-6xl text-black-50"
                }
              />
              <div className=" mt-8 gap-6   shadow-2xl shadow-slate-500 hover:shadow-lg  bg-gradient-to-l from-zinc-100 from-0% via-slate-500 via-50% to-zinc-200 to-100% to backdrop-blur-md flex flex-wrap items-center  pt-10 px-6  rounded-3xl     flex-shrink-0 ">
                <div className="w-full  gap-6    flex   flex-wrap justify-center items-center px-2 max-sm:flex-1 py-4">
                  {FirstRow.map((card) => {
                    return (
                      <Cards
                        content={card.content}
                        imgLink={card.imgLink}
                      ></Cards>
                    );
                  })}
                </div>
                <div className="w-full  gap-6   flex   flex-wrap justify-center items-center px-2 max-sm:flex-1 py-4">
                  {SecondArray.map((card) => {
                    return (
                      <Cards
                        content={card.content}
                        imgLink={card.imgLink}
                      ></Cards>
                    );
                  })}
                </div>
                <div className="w-full  gap-6  flex   flex-wrap justify-center items-center px-2 max-sm:flex-1 py-4">
                  {ThirdRow.map((card) => {
                    return (
                      <Cards
                        content={card.content}
                        imgLink={card.imgLink}
                      ></Cards>
                    );
                  })}
                </div>
                <div className="w-full  gap-6   flex   flex-wrap justify-center items-center px-2 max-sm:flex-1 py-4  ">
                  {FourthRow.map((card) => {
                    return (
                      <Cards
                        content={card.content}
                        imgLink={card.imgLink}
                      ></Cards>
                    );
                  })}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="">{<Work />}</div>
      <div className="">{<ProjectCards />}</div>
      <div className="">{<About />}</div>
      <div className="h-screen w-full">{<Contact />}</div>
      <div className="">{<Footer />}</div>
    </div>
  );
}
