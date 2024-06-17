import { Parameter } from "../pages/Landing";
export const Cards = ({ content, imgLink }: Parameter) => {
  return (
    <div
      className={
        "hover:scale-105 border-r-8 rounded-2xl border-b-8 border-violet-200 "
      }
    >
      <div className=" flex items-center justify-center rounded-lg bg-yellow-600 h-14 w-44  border-black">
        <div className="flex justify-between rounded-lg border-black gap-8 ">
          <img src={imgLink} className="" height={24} width={24}></img>
          <div className="text-lg text-white font-sans font-normal">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
