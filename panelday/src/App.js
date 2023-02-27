import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

import Home from "./components/Home.js";
import Mon from "./components/week/mon/Mon.js";
import Tues from "./components/week/tues/Tues";
import WedsdayLetMe from "./components/week/wed/WedsdayLetMe";
import Thurs from "./components/week/thurs/Thurs";
import Fri from "./components/week/fri/Fri";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mon" element={<Mon />} />
          <Route path="/tues" element={<Tues />} />
          <Route path="/wed" element={<WedsdayLetMe />} />
          <Route path="/thurs" element={<Thurs />} />
          <Route path="/fri" element={<Fri />} />
        </Routes>
      </div>
    </Router>

  );
}
