import ThemeToggle from "../ThemeToggle";
import CodeButton from "./Code";
import HomeButton from "./Home";
import ResumeButton from "./Resume";

const Footer = () => {
  return (
    <footer className="flex items-center justify-end gap-4 px-4 py-6 border-t shadow border-tertiary">
      <HomeButton />
      <ResumeButton />
      <CodeButton />
      <ThemeToggle />
    </footer>
  );
};

export default Footer;
