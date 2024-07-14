import { ReactNode, useState } from "react";
interface popOverProps {
  popoverContent?: string;
  children: ReactNode;
}
export const PopOver = ({ children, popoverContent }: popOverProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsPopoverOpen(true);
  };

  const handleMouseLeave = () => {
    setIsPopoverOpen(false);
  };

  return (
    <div className="relative">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=""
      >
        {children}
      </div>

      {isPopoverOpen && (
        <div
          role="tooltip"
          className="absolute left-[50%] transform -translate-x-1/2 bottom-[110%] z-10 min-w-[30%]  text-sm text-gray-100 transition-opacity duration-300 bg-lime-200 border border-gray-200 rounded-lg shadow-lg max-sm:w-full"
        >
          <div className="px-3 py-2">
            <h3 className="font-semibold text-slate-700">{popoverContent}</h3>
          </div>
          <div className="absolute w-3 h-3 bg-lime-200 border-b-2 border-l-2 border-gray-200  left-[50%] transform rotate-45 -translate-x-1/2"></div>
        </div>
      )}
    </div>
  );
};
