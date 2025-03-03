import React from "react";

export interface ProjectProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

const Project = (props: ProjectProps): React.ReactNode => {
  return (
    <div className="text-primary border-l-4 w-full p-2 border-primary hover:bg-tertiary">
      <div className="font-semibold pb-2">
        {props.title} ({props.startDate} - {props.endDate})
      </div>
      <div>{props.description}</div>
    </div>
  );
};

export default Project;
