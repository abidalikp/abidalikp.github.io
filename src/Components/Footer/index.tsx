import ThemeToggle from "../ThemeToggle";
import CodeButton from "./Code";
import HomeButton from "./Home";
import ResumeButton from "./Resume";
import LinkedInButton from "./LinkedIn";

const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-50 backdrop-blur-md bg-secondary/80 border-t border-card-border">
      <div className="flex items-center justify-center gap-3 px-4 py-3 max-w-5xl mx-auto">
        <HomeButton />
        <ResumeButton />
        <LinkedInButton />
        <CodeButton />
        <ThemeToggle />
      </div>
    </footer>
  );
};

export default Footer;
