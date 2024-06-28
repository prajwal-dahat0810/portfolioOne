import { useState } from "react";
import { Link } from "react-router-dom";
export const Footer = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  return (
    <footer className=" bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="flex gap-col max-sm:hidden">
        <div className=" flex gap-9 ">
          <div className="pb-4 pt-5">
            <div className="absolute left-36  inline-block">
              <div
                onMouseEnter={() => setVisible1(true)}
                onMouseLeave={() => setVisible1(false)}
                className="cursor-pointer"
              >
                <Link to={"/"}>
                  <div className="flex row  px-3 py-2  items-center w-16 h-16 text-white justify-center cursor-pointer rounded-full bg-teal-400 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
              {visible1 && (
                <div
                  className="absolute  z-10 px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-3xl shadow-sm dark:bg-gray-700"
                  style={{
                    bottom: "120%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {"dahatprajwal11@gmail.com"}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=" flex gap-9 ">
          <div className="pb-4 pt-5">
            <div className="relative left-56  inline-block">
              <div
                onMouseEnter={() => setVisible2(true)}
                onMouseLeave={() => setVisible2(false)}
                className="cursor-pointer"
              >
                <Link
                  to={"https://www.linkedin.com/in/prajwal-dahat-04845a252"}
                  target="_blank"
                >
                  <div className="flex row  px-3 py-2  items-center w-16 h-16 text-white justify-center cursor-pointer rounded-full bg-teal-400 ">
                    <svg
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                      height="3em"
                      width="3em"
                    >
                      <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1168.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z" />
                    </svg>
                  </div>
                </Link>
              </div>
              {visible2 && (
                <div
                  className="absolute  z-10 px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-3xl shadow-sm dark:bg-gray-700"
                  style={{
                    bottom: "120%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {"prajwalthere"}
                </div>
              )}
            </div>
          </div>
          <div className="pb-4 pt-5">
            <div className="relative left-56  inline-block">
              <div
                onMouseEnter={() => setVisible3(true)}
                onMouseLeave={() => setVisible3(false)}
                className="cursor-pointer"
              >
                <Link to={"https://github.com/prajwal-dahat0810"}>
                  <div className="flex row  px-3 py-2  items-center w-16 h-16 text-white justify-center cursor-pointer rounded-full bg-teal-400 ">
                    <svg
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      height="3em"
                      width="3em"
                    >
                      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                    </svg>
                  </div>
                </Link>
              </div>
              {visible3 && (
                <div
                  className="absolute text-center  w-44 z-10 px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded-3xl shadow-sm dark:bg-gray-700"
                  style={{
                    bottom: "120%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  {"Check out my github"}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full  min-h-10 mx-auto p-4 md:py-8">
        <hr className="my-6 w-full border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Prajwal™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
