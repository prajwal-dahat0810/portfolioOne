import { useRef } from "react";
export default function NavBar() {
  const scrollToHome = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    if (navbarRef.current) {
      navbarRef.current.classList.toggle("hidden");
    }
  };

  return (
    <div className="h-16 w-full fixed z-50 bg-gray-950 flex items-center justify-around">
      <div className="text-white font-serif font-extrabold border-indigo-800 bg-transparent px-6 py-2 rounded-lg    hover:bg-slate-300 hover:text-black max-sm:sr-only">
        Prajwal
      </div>
      <div className="text-white font-serif font-extrabold border-indigo-800 bg-transparent px-6 py-2 rounded-lg   sr-only  hover:text-black max-sm:not-sr-only max-sm:px-1  ">
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 hover:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="">
          <div
            ref={navbarRef}
            className="hidden z-50 min-w-28 md:block md:w-auto max-sm:absolute bg-transparent"
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col py-4 min-w-20 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  onClick={() => {
                    scrollToHome("home");
                    toggleMenu();
                  }}
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    scrollToHome("work");
                    toggleMenu();
                  }}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Work
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollToHome("about");
                    toggleMenu();
                  }}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    scrollToHome("contact");
                    toggleMenu();
                  }}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row  sr-only md:not-sr-only text-lg cursor-pointer gap-16 text-slate-300 justify-between   ">
        <div
          className="hover:text-white "
          onClick={() => {
            scrollToHome("home");
          }}
        >
          Home
        </div>
        <div
          className="hover:text-white"
          onClick={() => {
            scrollToHome("work");
          }}
        >
          Work
        </div>
        <div
          className="hover:text-white"
          onClick={() => {
            scrollToHome("about");
          }}
        >
          About
        </div>
        <div
          className="hover:text-white"
          onClick={() => {
            scrollToHome("contact");
          }}
        >
          Contact
        </div>
      </div>
      <div className="text-white">
        <button
          onClick={() => {
            window.location.href = "";
          }}
          className=" max-sm:min-w-20 max-sm:px-1 max-sm:text-xs max-md: border-indigo-800 bg-transparent px-6 py-2 rounded-lg min-w-36 border-2 hover:border-indigo-300 hover:bg-semal"
        >
          CV
        </button>
      </div>
    </div>
  );
}
