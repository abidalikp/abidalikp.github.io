import { ToastContainer } from "react-toastify";
import "./App.css";
import { Tooltip } from "react-tooltip";
import SiteRoutes from "./routes";

function App(): React.ReactNode {
  return (
    <div className="flex flex-col w-full min-h-screen bg-secondary">
      <ToastContainer
        autoClose={2000}
        position="bottom-center"
        pauseOnHover={false}
      />
      <Tooltip
        style={{ backgroundColor: "var(--primary)", color: "var(--secondary)" }}
        id="my-tooltip"
      />

      <SiteRoutes />
    </div>
  );
}

export default App;
