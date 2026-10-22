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
    <div className="flex items-center gap-4 border border-card-border rounded-xl p-4 bg-card-bg hover:border-accent/30 transition-all">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-accent-soft shrink-0">
        <GradCapIcon fill="var(--accent)" />
      </div>
      <div className="text-primary">
        <div className="font-bold">{props.school}</div>
        <div className="text-sm text-muted">{props.major}</div>
        <div className="text-xs text-muted mt-0.5">
          {props.startDate} – {props.endDate}
        </div>
      </div>
    </div>
  );
};

export default Education;
