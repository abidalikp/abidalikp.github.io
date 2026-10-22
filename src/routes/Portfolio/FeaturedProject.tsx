import React from "react";

export interface FeaturedProjectProps {
  title: string;
  category: string;
  problem: string;
  description: string;
  impact: string[];
  pmInsight: string;
  techStack: string[];
  url: string;
  github: string;
  startDate: string;
  endDate: string;
  featured: boolean;
  index: number;
}

const FeaturedProject = (props: FeaturedProjectProps): React.ReactNode => {
  return (
    <div className="rounded-2xl border border-card-border bg-card-bg overflow-hidden hover:border-accent/30 transition-all group">
      {/* Category & Title Header */}
      <div className="p-6 md:p-8 pb-0">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold tracking-wider uppercase text-accent bg-accent-soft px-3 py-1 rounded-full">
            {props.category}
          </span>
          <div className="flex gap-2">
            {props.github && (
              <a
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors p-2"
                onClick={(e) => e.stopPropagation()}
                aria-label="View source code"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {props.url && props.url !== props.github && (
              <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors p-2"
                onClick={(e) => e.stopPropagation()}
                aria-label="View live demo"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <h3 className="text-primary text-xl md:text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
          {props.title}
        </h3>
      </div>

      {/* Content Grid */}
      <div className="p-6 md:p-8 pt-4 grid md:grid-cols-2 gap-6">
        {/* Left: Problem & Solution */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-muted mb-2">
              🔍 The Problem
            </h4>
            <p className="text-primary text-sm leading-relaxed">
              {props.problem}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-muted mb-2">
              💡 The Solution
            </h4>
            <p className="text-muted text-sm leading-relaxed">
              {props.description}
            </p>
          </div>

          {/* Tech Stack pills */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {props.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md border border-card-border text-muted bg-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Impact & PM Insight */}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-muted mb-2">
              📈 Impact
            </h4>
            <ul className="flex flex-col gap-2">
              {props.impact.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-primary"
                >
                  <span className="text-accent mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto p-4 rounded-lg bg-accent-soft border border-accent/20">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-accent mb-2">
              🧠 PM Insight
            </h4>
            <p className="text-sm text-primary leading-relaxed italic">
              "{props.pmInsight}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
