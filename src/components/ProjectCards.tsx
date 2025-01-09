import { ProjectCard, ProjectParameter } from "./ProjectCard";
import paytmLogo from "../images/Projectimg/paytmlogo.png";
import smallesAI from "../images/Projectimg/smallestAI.png";
import monorepo from "../images/Projectimg/paytmMonorepo.png";
import mediumLogo from "../images/Projectimg/mediumlogo.png";
export const ProjectCards = () => {
  const Projects: ProjectParameter[] = [
    {
      id: 0,
      title: "Paytm",
      imageUrl: paytmLogo,
      description:
        "I build a PayTM like application that let’s users send money to each other given an initial dummy balance",
      projectUrl: "https://github.com/prajwal-dahat0810/Paytm.git",
      techStack: ["React JS", "Node JS", "TailwindCSS", "MongoDB"],
    },
    {
      id: 1,
      title: "Smalles AI",
      imageUrl: smallesAI,
      liveLink:
        "https://smallest-ai-static-site-cfjtdfs9r-prajwals-projects-986414b5.vercel.app/",
      description:
        "Build a Frontend clone Smallest AI Landing Page  in which  AI uses voice Enabling hyper-personalized AI interactions at population scale",
      projectUrl: "https://github.com/prajwal-dahat0810/test-static-site",
      techStack: ["Next JS", "Tailwind CSS"],
    },

    {
      id: 2,
      title: "Medium",
      imageUrl: mediumLogo,
      description:
        "Medium like blogging app. Use in a serverless fashion, using cloudflare workers, prisma as the ORM, typescript as the language",
      projectUrl:
        "https://github.com/prajwal-dahat0810/Medium-blog-website.git",
      liveLink: "https://medium-blog-website-pink.vercel.app/signup",
      techStack: ["React JS", "Hono", "PostgresQL", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Paytm Monorepo",
      imageUrl: monorepo,
      description:
        "Build Paytm  like application app. Allow user to on ramp dummy money from their dummy bank account, support dummy transactions",
      projectUrl: "https://github.com/prajwal-dahat0810/Paytm-Monorepo",
      techStack: [
        "Next JS",
        "PostgresQL",
        "Prisma ORM",
        "Turbo Repo",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <div id="project" className=" bg-slate-50  relative  h-full w-full ">
      <h2 className="border-b-[1px] pt-2 pb-4 mb-4 text-center text-[#454343] font-[500] w-full">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-2  my-2 max-sm:grid-cols-1">
        {Projects.map((project) => {
          return (
            <ProjectCard
              id={project.id}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              projectUrl={project.projectUrl}
              liveLink={project.liveLink}
              techStack={project.techStack}
            ></ProjectCard>
          );
        })}
      </div>
    </div>
  );
};
