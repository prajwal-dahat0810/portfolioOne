import { Parameter } from "../pages/Landing";
import { PopOver } from "./Popover";
export const MainHeading = ({
  content,
  style,
  hasPopover,
  popoverContent,
}: Parameter) => {
  return (
    <div className="relative">
      {hasPopover ? (
        <PopOver popoverContent={popoverContent}>
          <h2 className={style}>{content}</h2>
        </PopOver>
      ) : (
        <h2 className={style}>{content}</h2>
      )}
    </div>
  );
};
