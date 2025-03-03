import React from "react";
import GradCapIcon from "../../assets/icons/GradCap";

export interface EducationProps {
  school: string;
  major: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  highlights?: string[];
}

const Education = (props: EducationProps): React.ReactNode => {
  return (
    <div className="flex items-center gap-3 border rounded-lg p-3 hover:bg-tertiary">
      <GradCapIcon fill="var(--primary)" />
      <div className="text-primary ">
        <div className="font-semibold">{props.school}</div>
        <div className="italic">{props.major}</div>
      </div>
    </div>
  );
};

export default Education;
