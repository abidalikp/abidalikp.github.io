import { ToastContainer } from "react-toastify";
import "./App.css";
// import Resume from "./routes/Resume";
import Portfolio from "./routes/Portfolio";
import Footer from "./Components/Footer";
import { Tooltip } from "react-tooltip";

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
      {/* <div className="mx-auto max-w-3xl"> */}
      <div className="flex-grow">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
