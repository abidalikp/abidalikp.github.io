import { resumeData } from "../../Data/resume";
import Certification from "./Certification";
import MailButton from "./Components/Mail";
import PhoneButton from "./Components/Phone";
import Education from "./Education";
import Experience from "./Experience";
import Section from "../../Components/Section";

const Resume = (): React.ReactNode => {
  return (
    <div className="flex flex-col gap-6 p-4 py-8 max-w-3xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-primary text-5xl md:text-6xl font-bold">
          {resumeData.name}
        </h1>
        <p className="text-lg font-semibold mt-2">
          <span className="gradient-text">{resumeData.title}</span>
        </p>
      </div>

      {/* Contact */}
      <div className="text-primary flex flex-wrap gap-3 items-center">
        <MailButton />
        <PhoneButton />
        <a
          href={`https://${resumeData.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:underline"
        >
          LinkedIn ↗
        </a>
        <a
          href={`https://${resumeData.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent hover:underline"
        >
          GitHub ↗
        </a>
      </div>

      {/* Summary */}
      <div className="border border-card-border rounded-xl p-4 bg-card-bg text-primary text-sm leading-relaxed">
        {resumeData.summary}
      </div>

      {/* Experience */}
      <Section title="Experience">
        <div className="flex flex-col gap-4">
          {resumeData.experience.map((experience, index) => {
            return <Experience key={index} {...experience} />;
          })}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education">
        <div className="flex flex-col gap-4">
          {resumeData.education.map((education, index) => {
            return <Education key={index} {...education} />;
          })}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-accent mb-2">
              Product
            </h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.product.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-md border border-accent/20 text-primary bg-accent-soft"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-wider uppercase text-muted mb-2">
              Technical
            </h4>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.technical.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-md border border-card-border text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section title="Certifications">
        <div className="flex flex-wrap gap-4">
          {resumeData.certifications.map((certificate, index) => {
            return <Certification key={index} {...certificate} />;
          })}
        </div>
      </Section>
    </div>
  );
};
export default Resume;
