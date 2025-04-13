import { useNavigate } from "react-router-dom";
import HomeIcon from "../../assets/icons/Home";
import { IconButton } from "../Button";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <IconButton
      disabled={window.location.pathname === "/"}
      onClick={() => {
        navigate("/");
      }}
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Home"
      data-tooltip-place="left"
    >
      <HomeIcon />
    </IconButton>
  );
};

export default HomeButton;
