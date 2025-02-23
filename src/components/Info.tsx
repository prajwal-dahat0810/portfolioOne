import { useNavigate } from "react-router";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";

export const Info = () => {
  const navigate = useNavigate();
  const words = ["Prajwal Dahat", "Full Stack Developer"];
  return (
    <div
      id="info"
      className="w-full  border-b-[1px]  px-1 flex gap-[2px] flex-col pt-3 pb-4"
    >
      <motion.div
        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <div className='font-["monospace"] font-medium text-2xl mb-[6px] max-sm:flex max-sm:flex-col  tracking-tight'>
          <span> Hi There, I'm </span>
          <span>
            <FlipWords words={words} /> <br />
          </span>
        </div>
        <div className="text-[14px] text-[#525252] ">
          I'm a Full Stack Web developer from Amravati, Maharashtra, India.{" "}
          <br /> Building{" "}
          <span
            onClick={() =>
              (window.location.href = "https://devstype.vercel.app/signin")
            }
            className="text-[#6c6a6a] cursor-pointer font-[500] text-[15px] mr-1 underline"
          >
            {"devstype"}
          </span>
          (Multiplayer Monkey Type Game)
        </div>
      </motion.div>
    </div>
  );
};
