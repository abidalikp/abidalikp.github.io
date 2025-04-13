import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Portfolio from "./Portfolio";
import Footer from "../Components/Footer";
import Resume from "./Resume";

const SiteRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex-grow px-4 md:px-6">
                <Portfolio />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <div className="mx-auto max-w-3xl">
                <Resume />
              </div>
              <Footer />
            </>
          }
        />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
};

export default SiteRoutes;
