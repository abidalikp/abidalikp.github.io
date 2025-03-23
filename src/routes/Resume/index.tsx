import Header from "../../Components/Header";
import ThemeToggle from "../../Components/ThemeToggle";
import { resumeData } from "../../Data/resume";
import Certification from "./Certification";
import MailButton from "./Components/Mail";
import PhoneButton from "./Components/Phone";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Section from "../../Components/Section";

const Resume = (): React.ReactNode => {
  return (
    <div className="flex flex-col gap-4 p-2 py-6">
      <Header />
      <div className="text-primary flex flex-wrap gap-4">
        <ThemeToggle />
        <MailButton />
        <PhoneButton />
      </div>
      <div className="border text-primary rounded-lg p-3 hover:bg-tertiary">
        {resumeData.summary}
      </div>
      <Section title="Experience">
        <div className="flex flex-col gap-4">
          {resumeData.experience.map((experience, index) => {
            return <Experience key={index} {...experience} />;
          })}
        </div>
      </Section>
      <Section title="Education">
        <div className="flex flex-col gap-4">
          {resumeData.education.map((education, index) => {
            return <Education key={index} {...education} />;
          })}
        </div>
      </Section>
      <Section title="Projects">
        <div className="flex flex-wrap gap-4">
          {resumeData.projects.map((project, index) => {
            return <Project key={index} {...project} />;
          })}
        </div>
      </Section>
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
