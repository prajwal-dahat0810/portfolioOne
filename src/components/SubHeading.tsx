import { Parameter } from "../pages/Landing";
export const SubHeading = ({ content, style }: Parameter) => {
  return <h2 className={style}>{content}</h2>;
};
