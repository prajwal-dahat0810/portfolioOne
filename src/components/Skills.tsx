import { InfiniteMovingCards } from "./ui/InfinteCards";

const FirstRow = [
  {
    content: "Javascript",
    imgLink:
      "https://w7.pngwing.com/pngs/160/708/png-transparent-javascript-logo-javascript-logo-language-algorithm-app-3d-icon-thumbnail.png",
  },
  {
    content: "Typescript",
    imgLink:
      "https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png",
  },
  {
    content: "C++",
    imgLink:
      "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png",
  },
  {
    content: "Prisma",
    imgLink: "https://cdn.worldvectorlogo.com/logos/prisma-3.svg",
  },
];
const SecondArray = [
  {
    content: "React",
    imgLink:
      "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
  },
  {
    content: "Next",
    imgLink: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  },
  {
    content: "Express",
    imgLink:
      "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo-thumbnail.png",
  },
];
const ThirdRow = [
  {
    content: "MongoDB",
    imgLink:
      "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
  },
  {
    content: "Postgres",
    imgLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrMRP8cV7i9VhtX-DjvvoYt-6TY-gNakDNkw&usqp=CAU",
  },
  {
    content: "Git",
    imgLink:
      "https://cdn.iconscout.com/icon/free/png-256/free-git-18-1175219.png?f=webp",
  },
];
export const Skills = () => {
  return (
    <div id="skills" className="bg-slate-50 mb-3 mt-8 relative  h-full w-full">
      <h2 className="border-b-[1px] py-2 text-center text-[#454343] font-[500] w-full">
        Skills
      </h2>
      <InfiniteMovingCards items={FirstRow} direction="right" speed="slow" />
      <InfiniteMovingCards items={SecondArray} direction="left" speed="slow" />
      <InfiniteMovingCards items={ThirdRow} direction="right" speed="slow" />
    </div>
  );
};
