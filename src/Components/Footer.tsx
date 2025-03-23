import ThemeToggle from "./ThemeToggle";
import CodeButton from "./Code";

const Footer = () => {
  return (
    <footer className="flex items-center justify-end gap-4 px-4 py-6 border-t shadow border-tertiary">
      <CodeButton />
      <ThemeToggle />
    </footer>
  );
};

export default Footer;
