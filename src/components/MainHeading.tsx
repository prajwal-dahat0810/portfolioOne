import { Parameter } from "../pages/Landing";
export const MainHeading = ({ content, style }: Parameter) => {
  return <h2 className={style}>{content}</h2>;
};
