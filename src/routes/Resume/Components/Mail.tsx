import MailIcon from "../../../assets/icons/Mail";
import { IconButton } from "../../../Components/Button";
import { resumeData } from "../../../Data/resume";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";

const MailButton = () => {
  const { copyToClipboard } = useCopyToClipboard();
  return (
    <IconButton
      onClick={() => {
        copyToClipboard(resumeData.email);
      }}
    >
      <MailIcon fill="var(--primary)" />
    </IconButton>
  );
};

export default MailButton;
