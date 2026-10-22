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
    <div className="text-primary rounded-xl border border-card-border bg-card-bg p-5 hover:border-accent/30 transition-all">
      <div className="flex flex-wrap items-center justify-between mb-1">
        <div className="font-bold text-lg">{props.title}</div>
        <span className="text-xs text-muted">
          {props.startDate} – {props.endDate}
        </span>
      </div>
      <div className="text-sm text-accent font-medium mb-3">
        {props.company} · {props.location}
      </div>
      {props.description && (
        <p className="text-sm text-muted mb-3 italic">{props.description}</p>
      )}
      <ul className="flex flex-col gap-2">
        {props.highlights.map((highlight, index) => {
          return (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="text-accent mt-0.5 shrink-0">▸</span>
              <span>{highlight}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience;
