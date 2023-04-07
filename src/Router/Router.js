import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Falcon9 from "../Pages/Falcon9/Falcon9";
import Home from "../Pages/Home/Home";
import HumanSpace from "../Pages/HumanSpace/HumanSpace";
import LogoDark from "../Pages/LogoDark/LogoDark";
import "../styles/head.modulo.css";

function Routers() {
  return (
    <div>
      <Router>
        <div className="head">
          <Link to="/">
            <LogoDark />
          </Link>
          <div className="headLinks">
            <Link to="/Falcon9" className="Link">
              <strong>FALCON 9</strong>
            </Link>
            <Link to="/HumanSpace" className="Link Link2">
              <strong>HUMAN SPACE FLIGHT</strong>
            </Link>
          </div>
        </div>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Falcon9" element={<Falcon9 />} />
          <Route exact path="/HumanSpace" element={<HumanSpace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Routers;
