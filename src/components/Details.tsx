import { motion } from "framer-motion";

export const Details = () => {
  return (
    <div className=" bg-slate-50  my-3 relative  h-full w-full ">
      <h2 className="border-b-[1px] py-2 text-center text-[#454343] font-[500] w-full">
        Eduction
      </h2>
      <div>
        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 0.7 }}
        >
          <div className="mt-2 flex flex-row  justify-between items-center">
            {" "}
            <div>
              <div className="text-[11px] font-sepal font-[500]">
                Government College of Engineering,Amravati
              </div>
              <div className="text-[10px] text-slate-600  pl-2 font-[sepal] ">
                {"Bachelor of Technology in Information Technology"}{" "}
                <span>(CGPA: 7.28)</span>
              </div>
            </div>
            <div className="text-[11px] italic pl-2 font-sans font-400]">
              June-2021 - May 2025
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeIn", delay: 1 }}
        >
          <div className="mt-2 flex flex-row  justify-between items-center">
            <div>
              <div className="text-[11px] font-sepal font-[500]">
                Amolakchand Mahavidyalaya,Yavatmal
              </div>
              <div className="text-[10px] text-slate-600  pl-2 font-[sepal] ">
                {"Higher Secondary"} <span>(Percentage: 88.17%)</span>{" "}
              </div>
            </div>
            <div className="text-[11px] italic pl-2 font-sans font-400]">
              May 2020 - Feb 2021
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(2px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeIn", delay: 1.3 }}
      >
        {" "}
        <div className="mt-2 flex flex-row  justify-between items-center">
          <div>
            <div className="text-[11px] font-sepal font-[500]">
              Changrabagabai Pakode Vidyalaya,Mangrul Dastagir
            </div>
            <div className="text-[10px] text-slate-600 pl-2 font-[sepal] ">
              {" Secondary School"} <span>(Percentage: 81.60%)</span>{" "}
            </div>
          </div>
          <div className="text-[11px] italic pl-2 font-sans font-400]">
            June 2018 - March 2019
          </div>
        </div>
      </motion.div>
    </div>
  );
};
