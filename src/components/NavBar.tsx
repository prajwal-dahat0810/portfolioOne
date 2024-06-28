export default function NavBar() {
  const scrollToHome = ({ id }: any) => {
    const element = document.getElementById(`${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-16 w-full fixed z-50 bg-gray-950 flex items-center justify-around">
      <div className="text-white font-serif font-extrabold border-indigo-800 bg-transparent px-6 py-2 rounded-lg   hover:bg-slate-300 hover:text-black">
        Prajwal
      </div>
      <div className="flex flex-row  sr-only md:not-sr-only text-lg cursor-pointer gap-16 text-slate-300 justify-between   ">
        <div
          className="hover:text-white "
          onClick={(e) => {
            scrollToHome(home);
          }}
        >
          Home
        </div>
        <div
          className="hover:text-white"
          onClick={(e) => {
            scrollToHome(work);
          }}
        >
          Work
        </div>
        <div
          className="hover:text-white"
          onClick={(e) => {
            scrollToHome(about);
          }}
        >
          About
        </div>
        <div className="hover:text-white" onClick={(e) => {
            scrollToHome(contact);
          }}>Contact</div>
      </div>
      <div className="text-white">
        <button
          onClick={(e) => {
            window.location.href =
              "https://drive.google.com/file/d/1WRpTUyRwitCvdNXWOoylia4NFN0bDQC0/view";
          }}
          className=" max-sm: max-md: border-indigo-800 bg-transparent px-6 py-2 rounded-lg  border-2 hover:border-indigo-300 hover:bg-semal"
        >
          Download CV
        </button>
      </div>
    </div>
  );
}
