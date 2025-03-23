import Header from "../../Components/Header";
import { resumeData } from "../../Data/resume";
import Section from "../../Components/Section";
import Project from "./Project";

const Portfolio = () => {
  return (
    <div className="flex flex-col p-2 py-6 h-full">
      <Header />
      <div className="flex-grow">
        <Section title="Projects">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {resumeData.projects.map((project, index) => {
              return <Project key={index} {...project} />;
            })}
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Portfolio;
