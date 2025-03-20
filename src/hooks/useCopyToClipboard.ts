import { toast } from "react-toastify";

export function useCopyToClipboard() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      const isLightTheme = document
        .getElementById("root")
        ?.classList.contains("light");

      toast.success("Copied to clipboard", {
        theme: isLightTheme ? "light" : "dark",
      });
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return { copyToClipboard };
}
