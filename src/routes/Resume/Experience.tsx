import React from "react";

export interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  highlights: string[];
}

const Experience = (props: ExperienceProps): React.ReactNode => {
  return (
    <div className="text-primary border-l-4 p-2 border-primary hover:bg-tertiary">
      <div className="font-semibold pb-2">
        {props.title} at {props.company} ({props.startDate} - {props.endDate})
      </div>
      <ul className="flex flex-col gap-2">
        {props.highlights.map((highlight, index) => {
          return (
            <li
              style={{ listStyleType: "disc", marginLeft: "20px" }}
              key={index}
            >
              {highlight}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
