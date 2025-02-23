import { motion } from "framer-motion";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Details } from "../components/Details";
import { Footer } from "../components/Footer";
import { Info } from "../components/Info";
import NavBar from "../components/NavBar";
import { ProjectCards } from "../components/ProjectCards";
import { Skills } from "../components/Skills";
import { useRef } from "react";

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
    <div className="w-full  h-full ">
      <div className=" border w-full h-full flex flex-col items-center justify-start">
        <NavBar />

        <div
          id="home"
          className="max-w-xl w-full  bg-slate-50 h-full px-2 pt-2  mt-[52px]"
        >
          <Info />
          <About />
          <motion.div>
            <ProjectCards />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: "easeIn", delay: 0.3 }}
          >
            <Details />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: "easeIn", delay: 1 }}
          >
            <Skills />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: "easeIn", delay: 1 }}
          >
            <Contact />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: "easeIn", delay: 1.2 }}
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
