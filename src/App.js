import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Goride from "./Pages/Goride";
import Footer from "./component/Footer";
import Godilevery from "./Pages/Godilevery";
import Goeat from "./Pages/Goeat";
import Gopay from "./Pages/Gopay";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* <Preloader load={load} /> */}
      <div className={`${load ? "overflow-hidden h-screen" : "overflow-auto"} font-sans bg-white text-gray-900`}>
        <NavBar />
        {/* <ScrollToTop /> */}
        <Routes>
        <Route path="/" element={<Homepage />} />

          <Route path="/goride" element={<Goride />} />
          <Route path="/godelivery" element={<Godilevery />} />
          <Route path="/goride" element={<Goride />} />
          <Route path="/goeat" element={<Goeat />} />
          <Route path="/gopay" element={<Gopay />} />

          {/* <Route path="/project" element={<Projects />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
