import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import React, { useEffect, useState } from "react";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    content: string;
    imgLink: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "100s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "180s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 my-1  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full  shrink-0 gap-4 py-1  w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="bg-white max-w-full h-10  rounded-xl border  flex  gap-2 flex-row items-center justify-center border-slate-700 px-2 py-2 md:w-[150px]"
            key={idx}
          >
            <img
              src={item.imgLink}
              alt=""
              className="rounded-md h-[16px] w-[16px]"
            />

            <div className=" flex items-center justify-center z-20 text-sm  text-slate-900 font-normal">
              {item.content}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
