import { resumeData } from "../../Data/resume";

const SkillsSection = () => {
  return (
    <section className="py-16 border-t border-card-border">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px flex-grow bg-card-border" />
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">
          Toolkit
        </span>
        <div className="h-px flex-grow bg-card-border" />
      </div>
      <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-12">
        Skills & Competencies
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Skills */}
        <div className="p-6 rounded-xl border border-card-border bg-card-bg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-accent-soft">
              🎯
            </div>
            <h3 className="text-primary font-bold text-lg">Product Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.product.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1.5 rounded-lg border border-accent/20 text-primary bg-accent-soft"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="p-6 rounded-xl border border-card-border bg-card-bg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-accent-soft">
              ⚙️
            </div>
            <h3 className="text-primary font-bold text-lg">
              Technical Skills
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {resumeData.skills.technical.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1.5 rounded-lg border border-card-border text-muted bg-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
