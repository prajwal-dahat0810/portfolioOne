import { MainHeading } from "./MainHeading";
export default function Work() {
  return (
    <div className="  w-full pt-12 bg-white h-[1000px]  flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 md:p-44   md:mt-28  mt-8">
      <div className="   h-full flex items-start justify-center ">
        <div className="relative gap-6  h-5/6  flex items-center   pt-10 flex-col ">
          <div className="flex row  px-3 py-2 items-center w-28 text-white justify-center rounded-full bg-teal-400 max-sm:w-12 h-9 ">
            <svg
              viewBox="0 0 32 32"
              fill="currentColor"
              height="4em"
              width="4em"
            >
              <path
                fill="currentColor"
                d="M4.009 16.403a.544.544 0 00-.543.523v1.209a.546.546 0 00.542.505.55.55 0 00.543-.505v-1.209a.541.541 0 00-.543-.523zm3.006-1.501a.544.544 0 00-.543.523v2.71a.545.545 0 001.086 0v-2.71a.54.54 0 00-.543-.523zm2.99-2.061c-.14 0-.275.055-.377.152s-.161.23-.166.371v5.861a.546.546 0 00.542.505c.137 0 .27-.052.37-.146s.162-.222.173-.359v-5.861a.548.548 0 00-.543-.523zm3.005 2.061a.544.544 0 00-.543.523v2.71a.545.545 0 001.085 0v-2.71a.54.54 0 00-.543-.523zm2.993 1.501a.544.544 0 00-.543.523v1.209a.543.543 0 00.543.505c.137 0 .27-.052.37-.146s.162-.222.173-.359v-1.209a.546.546 0 00-.543-.523zm3.003-1.501a.544.544 0 00-.543.523v2.71a.545.545 0 001.085 0v-2.71a.54.54 0 00-.543-.523zm2.99-2.061a.546.546 0 00-.543.523v5.861a.543.543 0 00.543.505.541.541 0 00.542-.505v-5.861a.548.548 0 00-.543-.523zm3.001 2.061a.54.54 0 00-.542.523v2.71a.545.545 0 001.086 0v-2.71a.546.546 0 00-.544-.523zm3.37 1.652a.544.544 0 00-.752 0 .543.543 0 00-.166.371v1.209a.548.548 0 00.542.505c.137 0 .27-.052.37-.146s.162-.222.173-.359v-1.209a.544.544 0 00-.167-.371z"
              />
            </svg>
          </div>
          <MainHeading
            content={"CODE : WORK"}
            style={
              "max-sm:text-xl  font-mono font-semibold text-6xl text-slate-900 "
            }
            hasPopover={true}
            popoverContent={"Some of the Works, I did"}
          />
        </div>
      </div>
    </div>
  );
}
