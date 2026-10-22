import { resumeData } from "../../Data/resume";

const AboutSection = () => {
  const qualities = [
    {
      icon: "🎯",
      title: "Product Instinct",
      description:
        "I don't just build features — I ask why. Every project starts with the user problem, not the tech stack.",
    },
    {
      icon: "⚡",
      title: "Technical Depth",
      description:
        "From React to PyTorch, I speak engineering fluently. I can scope what's feasible, estimate effort, and unblock teams.",
    },
    {
      icon: "📊",
      title: "Data-Driven",
      description:
        "I measure what matters. Whether it's a 30% latency reduction or ROUGE scores, every decision ties back to metrics.",
    },
    {
      icon: "🚀",
      title: "0 → 1 Builder",
      description:
        "I've taken products from napkin sketch to production. I thrive in ambiguity and move fast without breaking things.",
    },
  ];

  return (
    <section className="py-16 border-t border-card-border">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-px flex-grow bg-card-border" />
        <span className="text-xs font-semibold tracking-widest uppercase text-accent">
          Why PM?
        </span>
        <div className="h-px flex-grow bg-card-border" />
      </div>

      <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-4">
        Engineer → Product Manager
      </h2>

      <p className="text-muted text-center max-w-2xl mx-auto mb-12 leading-relaxed">
        {resumeData.summary}
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {qualities.map((q) => (
          <div
            key={q.title}
            className="p-6 rounded-xl border border-card-border bg-card-bg hover:border-accent/30 transition-all group"
          >
            <div className="text-3xl mb-3">{q.icon}</div>
            <h3 className="text-primary font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
              {q.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed">
              {q.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
