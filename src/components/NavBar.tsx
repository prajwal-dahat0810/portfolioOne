export default function NavBar() {
  return (
    <div className="h-16 w-full fixed z-50 bg-gray-950 flex items-center justify-around">
      <div className="text-white font-serif font-extrabold border-indigo-800 bg-transparent px-6 py-2 rounded-lg   hover:bg-slate-300 hover:text-black">
        Prajwal
      </div>
      <div className="flex flex-row  sr-only md:not-sr-only text-lg gap-16 text-slate-300 justify-between   ">
        <div className="hover:text-white">Home</div>
        <div className="hover:text-white">Work</div>
        <div className="hover:text-white">About</div>
        <div className="hover:text-white">Contact</div>
      </div>
      <div className="text-white">
        <button className=" max-sm: max-md: border-indigo-800 bg-transparent px-6 py-2 rounded-lg  border-2 hover:border-indigo-300 hover:bg-semal">
          Download CV
        </button>
      </div>
    </div>
  );
}
