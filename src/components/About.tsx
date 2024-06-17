import { MdSelfImprovement } from "react-icons/md";
import { MainHeading } from "./MainHeading";
import myimg from "../images/myimg1.jpg";
export const About = () => {
  return (
    <div className="h-screen w-full">
      <div className="relative h-full  flex items-center   p-10 flex-col ">
        <div className="flex row  px-3 py-2 items-center text-white justify-center rounded-full bg-teal-400 ">
          <MdSelfImprovement />
        </div>
        <MainHeading
          content={"CODE : ABOUT"}
          style={
            "max-sm:text-xl  font-mono font-semibold text-6xl text-slate-900 "
          }
        />
        <div className="relative w-full border gap-9 h-5/6  flex items-center   pt-10 pb-2 px-3  ">
          <div className="flex row  border  h-full w-[40%] items-center text-white justify-center   ">
            <img src={myimg} alt="" className="h-full w-full" />
          </div>
          <div className="flex row  border h-full w-[50%]  items-center text-md px-3 py-2   leading-loose  text-slate-600 font-medium justify-center   ">
            i am the best answer and do things that are impossible and very very
            difficult for u
          </div>
        </div>
      </div>
    </div>
  );
};
