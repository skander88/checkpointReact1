import React from "react";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Navigation from "./composants/Navigation";
import Cards from "./composants/Card";
import Formulaire from "./composants/Formulaire";

function App() {
  return (
    <div className="lkol">
      <div className="navi">
        <center>
          <Navigation />
        </center>
      </div>

      <br />
      <br />
      <div className="west">
        <Cards />
        <Formulaire />
      </div>

      <footer className="fin">
        <h1>You are always welcome !</h1>
        <h2>Contact us for more informations</h2>
      </footer>
    </div>
  );
}
export default App;
