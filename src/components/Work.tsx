import { MainHeading } from "./MainHeading";
import { IoCodeWorkingSharp } from "react-icons/io5";
export default function Work() {
  return (
    <div className="  w-full pt-12 bg-white  flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 md:p-44 h-screen  md:mt-28  mt-8">
      <div className="   h-full flex items-start justify-center ">
        <div className="relative gap-6  h-5/6  flex items-center   pt-10 flex-col ">
          <div className="flex row  px-3 py-2 items-center text-white justify-center rounded-full bg-teal-400 ">
            <IoCodeWorkingSharp />
          </div>
          <MainHeading
            content={"CODE : WORK"}
            style={
              "max-sm:text-xl  font-mono font-semibold text-6xl text-slate-900 "
            }
          />
        </div>
      </div>
    </div>
  );
}
