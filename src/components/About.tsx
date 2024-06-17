import { MainHeading } from "./MainHeading";
import myimg from "../images/myimg1.jpg";
export const About = () => {
  return (
    <div className="h-screen w-full">
      <div className="relative h-full  flex items-center   p-10 flex-col ">
        <div className="flex row  px-3 py-2 items-center text-white justify-center rounded-full bg-teal-400 ">
          <div>
            {" "}
            <svg
              baseProfile="tiny"
              viewBox="0 0 24 24"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.953 7.953 0 004.499-1.384 1.001 1.001 0 00-1.127-1.653A5.951 5.951 0 0112 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6v.5a1 1 0 01-2 0v-3a1 1 0 00-1-1 .99.99 0 00-.938.688A3.466 3.466 0 0012 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.045 0 1.975-.47 2.616-1.199A2.988 2.988 0 0017 15.5c1.654 0 3-1.346 3-3V12c0-4.411-3.589-8-8-8zm0 9.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z" />
            </svg>
          </div>
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
