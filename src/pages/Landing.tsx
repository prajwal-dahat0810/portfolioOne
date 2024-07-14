import { MainHeading } from "../components/MainHeading";
import NavBar from "../components/NavBar";
import { ProjectCards } from "../components/ProjectCards";
import { SubHeading } from "../components/SubHeading";
import myImg from "../images/bg-baground.jpg";
import Work from "../components/Work";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Skills } from "../components/Skills";
import { motion } from "framer-motion";

export type Parameter = {
  content: string;
  style?: string;
  imgLink?: string;
  description?: string;
  hasPopover?: boolean;
  popoverContent?: string;
};

export default function Landing() {
  return (
    <div className="w-full   ">
      <NavBar></NavBar>

      <div
        id="home"
        className="  bg-white md:pt-28 h-screen flex flex-col items-center justify-center text-center overflow-hidden pb-10 pt-52"
      >
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
      <Skills />

      <div className=" absolute  w-full  md:pt-28 h-1/5 flex flex-col items-center justify-center text-center  bottom-48 max-sm:bottom-2">
        <motion.div
          initial={{ x: 200, y: 0, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: [0, 0.3, 0.7, 1] }}
          viewport={{ once: true }}
        >
          <SubHeading
            content={"Full Stack Developer"}
            style={
              "z-40  bottom-40  text-3xl text-slate-500 text-sm text-gray-800 dark:text-gray-400 uppercase  md:tracking-[15px] pb-2 font-outfit max-sm:text-xs max-sm:tracking-[5px] font-medium"
            }
          />
        </motion.div>
      </div>

      <div className="absolute   w-full  md:pt-28 h-1/5 flex flex-col items-center justify-center text-center  bottom-32 max-sm:bottom-12">
        <motion.div
          initial={{ x: 0, y: -200, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 3, ease: [0, 0.3, 0.7, 1] }}
          viewport={{ once: true }}
        >
          <MainHeading
            content={"PRAJWAL DAHAT"}
            style={"max-sm:text-xl  font-semibold text-6xl text-gray-400"}
            hasPopover={false}
            popoverContent={"mySkills"}
          />{" "}
        </motion.div>
      </div>

      <div className="" id={"work"}>
        {<Work />}
      </div>
      <div className="">{<ProjectCards />}</div>
      <div className="">{<About />}</div>
      <div className="">{<Contact />}</div>
      <div className=" ">{<Footer />}</div>
    </div>
  );
}
