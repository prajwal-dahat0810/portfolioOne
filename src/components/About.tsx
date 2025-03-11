import { motion } from "framer-motion";
import myimg from "../images/myimg1 (1).jpg";
export const About = () => {
  function handleClick() {
    window.open(
      "https://drive.google.com/file/d/1dNt_LbgltGA40Y9rbpDYd5kxD2rMgifi/view?usp=drive_link",
      "_blank",
      "noopener,noreferrer"
    );
  }
  return (
    <div id="about" className="h-[300px] max-sm:h-full   w-full">
      <div className="relative h-full flex-row max-sm:flex-col  flex items-center gap-3   ">
        <div className="flex flex-col   h-full w-[50%]  items-start text-md  py-1   leading-loose  text-slate-500  justify-start  max-sm:font-normal max-sm:text-sm  max-sm:w-full  px-1   ">
          <h2 className="-b-[1px] pb-2  text-[#454343]  font-[500] w-full">
            About
          </h2>
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeIn", delay: 0.4 }}
          >
            <div className="flex   flex-row  text-md py-2  text-[13px]  leading-[20px] justify-start items-start   text-[#5c5c5c] font-[450]  ">
              {
                "I am a software developer passionate about crafting dynamic and user-centric web apps. With experience in modern technologies, I thrive on building scalable and intuitive web solutions. I embrace challenges as opportunities to learn and grow as a developer. "
              }
            </div>
            <button
              onClick={handleClick}
              className="px-4 py-[2px] text-[12px] rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-slate-200 hover:text-black border-2 border-transparent hover:border-teal-500"
            >
              Download CV
            </button>{" "}
          </motion.div>
        </div>{" "}
        <div className="flex row    h-full w-[40%] items-center  text-white justify-center   max-sm:w-[100%] max-h-full max-sm:h-full">
          <motion.img
            src={myimg}
            alt=""
            initial={{ opacity: 0, y: -20, filter: "blur(18px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="max-sm:h-96 h-full rounded-xl w-full"
          />
        </div>
      </div>
    </div>
  );
};
