import PhoneIcon from "../../../assets/icons/Phone";
import { IconButton } from "../../../Components/Button";
import { resumeData } from "../../../Data/resume";
import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";

const PhoneButton = () => {
  const { copyToClipboard } = useCopyToClipboard();
  return (
    <IconButton
      onClick={() => {
        copyToClipboard(resumeData.phone);
      }}
    >
      <PhoneIcon fill="var(--primary)" />
    </IconButton>
  );
};

export default PhoneButton;
