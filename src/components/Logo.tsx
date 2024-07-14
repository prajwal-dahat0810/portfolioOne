export interface LogoParams {
  imgLink: string;
  height: number;
  width: number;
}

export const Logo = ({ imgLink, height, width }: LogoParams) => {
  return (
    <div className=" flex   ">
      <img src={imgLink} className="" height={height} width={width}></img>
    </div>
  );
};
