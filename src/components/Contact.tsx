import { useState } from "react";
import { SubHeading } from "./SubHeading";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <div id="contact" className="w-full h-full  ">
      <div className="relative h-full  flex items-center gap-3   p-10 flex-col ">
        <div className="flex row  px-3 py-2 items-center w-20 h-9 text-white justify-center rounded-full bg-slate-500 ">
          <svg viewBox="0 0 21 21" fill="currentColor" height="2em" width="2em">
            <g
              fill="none"
              fillRule="evenodd"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(3 3)"
            >
              <path d="M9.5 5.5 A2 2 0 0 1 7.5 7.5 A2 2 0 0 1 5.5 5.5 A2 2 0 0 1 9.5 5.5 z" />
              <path d="M.5 3.5h1v-1a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2v-1h-1M.5 7.5h1M.5 5.5h1M.5 9.5h1" />
              <path d="M10.5 10.5v-1a2 2 0 00-2-2h-2a2 2 0 00-2 2v1a1 1 0 001 1h4a1 1 0 001-1z" />
            </g>
          </svg>
        </div>

        <div>
          <SubHeading
            content="CONNECT WITH ME"
            style="max-sm:text-sm font-medium z-50  bottom-40  text-3xl text-slate-500 text-sm text-gray-800 dark:text-gray-400 uppercase  md:tracking-[15px] pb-2 font-outfit"
          ></SubHeading>
        </div>
      </div>
    </div>
  );
};
