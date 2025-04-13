import { useNavigate } from "react-router-dom";
import DocIcon from "../../assets/icons/Doc";
import { IconButton } from "../Button";

const ResumeButton = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      disabled={window.location.pathname === "/resume"}
      onClick={() => {
        navigate("/resume");
      }}
      data-tooltip-id="my-tooltip"
      data-tooltip-content="View Resume"
      data-tooltip-place="left"
    >
      <DocIcon />
    </IconButton>
  );
};

export default ResumeButton;
