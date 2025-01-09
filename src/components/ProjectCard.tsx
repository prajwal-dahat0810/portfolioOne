import { Link } from "react-router-dom";

export interface ProjectParameter {
  imageUrl?: string;
  title?: string;
  id: number;
  description?: string;
  projectUrl: string;
  currentIndex?: number;
  index?: number;
  liveLink?: string;
  techStack?: any;
}
[];
import { Button } from "../components/ui/moving-border";
export const ProjectCard = ({
  id,
  currentIndex,
  imageUrl,
  title,
  description,
  projectUrl,
  techStack,
  liveLink,
}: ProjectParameter) => {
  return (
    <Button className="w-full h-full">
      <div className=" bg-white  w-full border rounded-xl  h-full  -bottom-[39%]  ">
        <div
          key={id}
          className={`  rounded-md pb-2   h-[400px]  max-sm:opacity-100 transition-opacity relative duration-[600ms] ease-in-out motion-reduce:transition-none max-sm:h-[380px] `}
          data-twe-carousel-fade
          data-twe-carousel-item
        >
          <img
            style={{
              imageRendering: "crisp-edges",
            }}
            src={imageUrl}
            className="max-w-full  h-[50%]"
            alt={`Carousel item `}
          />
          <div className="h-10  flex flex-row items-center justify-between    max-w-full px-1   relative  bottom-0  py-1  text-black ">
            <h5 className="mt-1 pl-1  font-sans tracking-tight">{title}</h5>
            <div className=" pr-2  flex justify-start gap-1 items-start ">
              <Link to={projectUrl}>
                <div className=" flex text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-5"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 25 8 C 15.611 8 8 15.611 8 25 C 8 34.389 15.611 42 25 42 C 34.389 42 42 34.389 42 25 C 42 15.611 34.389 8 25 8 z M 25 9 C 33.837 9 41 16.163 41 25 C 41 32.315911 36.085048 38.472093 29.380859 40.378906 C 29.244571 40.172672 29.145294 39.932396 29.152344 39.650391 C 29.179344 38.593391 29.152344 36.129609 29.152344 35.224609 C 29.152344 33.671609 28.169922 32.570312 28.169922 32.570312 C 28.169922 32.570312 35.878906 32.657641 35.878906 24.431641 C 35.878906 21.257641 34.222656 19.605469 34.222656 19.605469 C 34.222656 19.605469 35.092922 16.216297 33.919922 14.779297 C 32.604922 14.637297 30.249141 16.036453 29.244141 16.689453 C 29.244141 16.689453 27.652953 16.037109 25.001953 16.037109 C 22.350953 16.037109 20.757812 16.689453 20.757812 16.689453 C 19.751812 16.036453 17.397031 14.637297 16.082031 14.779297 C 14.909031 16.216297 15.779297 19.605469 15.779297 19.605469 C 15.779297 19.605469 14.121094 21.255688 14.121094 24.429688 C 14.121094 32.655687 21.830078 32.568359 21.830078 32.568359 C 21.830078 32.568359 21.05381 33.443176 20.882812 34.730469 C 20.35101 34.918958 19.615523 35.146484 18.914062 35.146484 C 17.241063 35.146484 15.969906 33.519578 15.503906 32.767578 C 15.043906 32.025578 14.101656 31.402344 13.222656 31.402344 C 12.643656 31.402344 12.359375 31.692438 12.359375 32.023438 C 12.359375 32.354437 13.171031 32.584266 13.707031 33.197266 C 14.837031 34.490266 14.816844 37.400391 18.839844 37.400391 C 19.314 37.400391 20.165462 37.292676 20.847656 37.199219 C 20.843251 38.143438 20.832715 39.064049 20.847656 39.648438 C 20.854716 39.930842 20.755741 40.172492 20.619141 40.378906 C 13.914952 38.472093 9 32.315911 9 25 C 9 16.163 16.163 9 25 9 z"></path>
                  </svg>
                </div>
              </Link>
              {/**/}
              {liveLink !== undefined ? (
                <Link to={liveLink}>
                  <div className=" flex ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                      />
                    </svg>
                  </div>
                </Link>
              ) : (
                " "
              )}
            </div>
          </div>
          <p className="text-[12px] px-2 py-2 text-slate-600 ">{description}</p>
          <p className=" px-2 py-2 flex flex-row flex-wrap gap-2 text-slate-600">
            {techStack.map((skill: string) => {
              return (
                <span className="px-1 bg-slate-200 rounded-sm   text-[8px] border">
                  {skill}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </Button>
  );
};
