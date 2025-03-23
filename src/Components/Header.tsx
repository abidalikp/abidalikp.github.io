import { resumeData } from "../Data/resume";

const Header = () => {
  return (
    <div className="text-primary text-7xl pb-4 font-bold">
      {resumeData.name}
    </div>
  );
};

export default Header;
