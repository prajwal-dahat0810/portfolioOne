import { ProjectParameter } from "./ProjectCard";
import { Link } from "react-router-dom";
import paytmLogo from "../images/Projectimg/paytmlogo.png";
import mediumLogo from "../images/Projectimg/medium.png";
export const MainCard = () => {
  const Projects: ProjectParameter[] = [
    {
      id: 0,
      title: "Paytm Project",
      imageUrl: paytmLogo,
      description:
        "I build a PayTM like application that let’s users send money to each other given an initial dummy balance",
      projectUrl: "https://github.com/prajwal-dahat0810/Paytm.git",
    },
    {
      id: 1,
      title: "Blogging  Website",
      imageUrl: mediumLogo,
      description:
        "Medium like blogging app. Use  in a serverless fashion, using cloudflare workers, prisma as the ORM, typescript as the language",
      projectUrl:
        "https://github.com/prajwal-dahat0810/Medium-blog-website.git",
    },
  ];

  return (
    <div>
      {Projects.map(
        ({
          imageUrl,
          id,
          title,
          description,
          projectUrl,
        }: ProjectParameter) => (
          <div
            key={id}
            className={`absolute  border w-full h-full transition-transform duration-700 ease-in-out`}
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="flex    flex-col">
              <Link to={`${projectUrl}`}>
                <div className="w-full min-h-52  ">
                  <img
                    src={imageUrl}
                    alt={`Carousel item ${id + 1}`}
                    className="block h-[178px] fill min-h-64 w-full  object-fill"
                  />
                </div>
                <div className="flex px-2 pt-4 flex-col">
                  <div className="text-xl  min-h-8 h-3/6  text-slate-700 font-medium bg-transparent flex items-center justify-center bottom-10">
                    {title}
                  </div>
                  <div className=" text-md px-2 py-2  min-h-48  leading-loose  text-slate-600 font-medium    bottom-10">
                    {description}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )
      )}
    </div>
  );
};
