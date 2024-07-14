import { Parameter } from "../pages/Landing";
import { motion } from "framer-motion";
export const Cards = ({ content, imgLink }: Parameter) => {
  return (
    <div
      className={
        "hover:scale-105 border-r-8 rounded-2xl border-b-8 border-violet-200 "
      }
    >
      <motion.div
        initial={{ x: 0, y: 0, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 3 }}
        viewport={{ once: true }}
      >
        <div className=" flex items-center justify-center rounded-lg bg-yellow-600 h-14 w-44  border-black">
          <div className="flex justify-between rounded-lg border-black gap-8 ">
            <img src={imgLink} className="" height={24} width={24}></img>
            <div className="text-lg text-white font-sans font-normal">
              {content}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
