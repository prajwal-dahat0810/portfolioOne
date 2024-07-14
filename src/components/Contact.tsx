import { useState } from "react";
import { MainHeading } from "./MainHeading";
import { SubHeading } from "./SubHeading";
export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <div id="contact" className="w-full h-full  ">
      <div className="relative h-full  flex items-center gap-3   p-10 flex-col ">
        <div className="flex row  px-3 py-2 items-center w-20 h-9 text-white justify-center rounded-full bg-teal-400 ">
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
          <MainHeading
            content={"CODE : CONTACT US"}
            style={
              "max-sm:text-xl  font-mono font-semibold text-6xl text-slate-900 "
            }
            hasPopover={true}
            popoverContent={"Found Me , Here"}
          />
        </div>
        <div>
          <SubHeading
            content="Develop Website"
            style="max-sm:text-sm font-medium z-50  bottom-40  text-3xl text-slate-500 text-sm text-gray-800 dark:text-gray-400 uppercase  md:tracking-[15px] pb-2 font-outfit"
          ></SubHeading>
        </div>
        <div className="max-sm:text-sm font-medium z-50  bottom-40    text-md text-gray-800 dark:text-gray-400 uppercase  md:tracking-[1px] pb-2 ">
          Get In Touch With Me !
        </div>
        <div className="relative w-3/5 border rounded gap-4 h-5/6  flex items-center flex-col   pt-10 pb-2 px-6 max-sm:min-w-full ">
          <div className="flex gap-4 w-full  min-h-14 max-sm:flex-col">
            <div className="w-full  min-h-14">
              <label className="block mb-2 text-md    font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border h-14 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full  min-h-14 ">
              <label className="block mb-2 text-md    font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="text"
                id="Email"
                className="bg-gray-50 border h-14 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john@gmail.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="h-72  w-full">
            <textarea
              className="h-72 py-7 px-3 w-full border   text-slate-600 "
              placeholder="Writing Message ..."
              onChange={(e) => setSubject(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={(e) => {
              window.location.href = `mailto:dahataprajwal11@gmail.com?name=${name}&email=${email}&subject=${subject}`;
            }}
            type="submit"
            className="w-full min-h-12 bg-slate-200 max-sm: max-md: border-indigo-800 bg-transparent px-6 py-2 rounded-lg  border-2 hover:border-indigo-300 hover:bg-semal"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
