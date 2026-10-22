import { resumeData } from "../../Data/resume";
import ProjectCard from "./ProjectCard";
import FeaturedProject from "./FeaturedProject";
import SkillsSection from "./SkillsSection";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";

const Portfolio = () => {
  const featuredProjects = resumeData.projects.filter((p) => p.featured);
  const otherProjects = resumeData.projects.filter((p) => !p.featured);

  return (
    <div className="flex flex-col max-w-5xl mx-auto">
      {/* Hero Section */}
      <HeroSection />

      {/* About / Value Prop */}
      <AboutSection />

      {/* Featured Case Studies */}
      <section id="projects" className="py-16">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-px flex-grow bg-card-border" />
          <span className="text-xs font-semibold tracking-widest uppercase text-accent">
            Featured Work
          </span>
          <div className="h-px flex-grow bg-card-border" />
        </div>
        <h2 className="text-primary text-3xl md:text-4xl font-bold text-center mb-3">
          Product Case Studies
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12">
          Each project demonstrates end-to-end product thinking — from
          identifying the problem to shipping the solution and measuring impact.
        </p>

        <div className="flex flex-col gap-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={index} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="pb-16">
          <h3 className="text-primary text-2xl font-bold mb-6">
            More Projects
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      <SkillsSection />

      {/* CTA */}
      <section className="py-16 text-center">
        <div className="rounded-2xl border border-card-border bg-card-bg p-8 md:p-12">
          <h2 className="text-primary text-2xl md:text-3xl font-bold mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-muted max-w-lg mx-auto mb-8">
            I'm actively looking for Product Management roles where I can
            combine my technical depth with product instincts to drive real user
            impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`mailto:${resumeData.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all hover:scale-105"
              style={{
                background:
                  "linear-gradient(135deg, var(--gradient-start), var(--gradient-end))",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.00333 5.88355L9.99995 9.88186L17.9967 5.8835C17.9363 4.83315 17.0655 4 16 4H4C2.93452 4 2.06363 4.83318 2.00333 5.88355Z" />
                <path d="M18 8.1179L9.99995 12.1179L2 8.11796V14C2 15.1046 2.89543 16 4 16H16C17.1046 16 18 15.1046 18 14V8.1179Z" />
              </svg>
              Get in Touch
            </a>
            <a
              href={`https://${resumeData.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-primary border border-card-border font-semibold hover:bg-tertiary transition-all"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
