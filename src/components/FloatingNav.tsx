import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <div className={cn("relative  md:hidden", className)}>
      <motion.div
        layoutId="nav"
        className="w-full max-w-xl inset-x-0 flex flex-row h-16 items-center bg-gray-50 justify-center gap-4"
      >
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 0,
              transition: {
                delay: idx * 0.05,
              },
            }}
            // transition={{ delay: (items.length - 1 + idx) * 0.05 }}
          >
            <a
              target="_blank"
              className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center  justify-center"
              href={item.href}
            >
              <div className="h-4 w-4">{item.icon}</div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button> */}
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto w-full max-w-xl hidden md:flex  justify-center h-16 gap-7 items-end  rounded-md bg-gray-50 dark:bg-neutral-900 px-4 pb-3",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-80, 0, 30], [30, 30, 30]);
  let heightTransform = useTransform(distance, [-80, 0, 30], [30, 30, 30]);

  let widthTransformIcon = useTransform(distance, [-50, 0, 30], [18, 20, 18]);
  let heightTransformIcon = useTransform(distance, [-50, 0, 30], [18, 20, 18]);

  let width = useSpring(widthTransform, {
    mass: 0.01,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.01,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.01,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.01,
    stiffness: 150,
    damping: 12,
  });

  const [, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="aspect-square   dark:bg-neutral-800 flex items-center justify-center relative"
    >
      <a href={href}>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center gap-0 justify-center"
        >
          {icon}
        </motion.div>
      </a>
    </motion.div>
  );
}
