import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Details } from "../components/Details";
import { Footer } from "../components/Footer";
import { Info } from "../components/Info";
import NavBar from "../components/NavBar";
import { ProjectCards } from "../components/ProjectCards";
import { Skills } from "../components/Skills";

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
          <ProjectCards />
          <Details />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
