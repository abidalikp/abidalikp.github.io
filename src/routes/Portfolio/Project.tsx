import React from "react";

export interface ProjectProps {
  title: string;
  description: string;
  url: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

const Project = (props: ProjectProps): React.ReactNode => {
  const handleClick = () => {
    if (props.url) {
      window.open(props.url, "_blank");
    }
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-col gap-2 text-primary border hover:shadow hover:shadow-primary w-full p-3 border-primary rounded-lg hover:bg-tertiary cursor-pointer"
    >
      <div className="font-bold text-lg">{props.title}</div>
      <div className=" text-sm font-light">{props.description}</div>
    </div>
  );
};

export default Project;
