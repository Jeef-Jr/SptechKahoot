import React from "react";
import "./styles.css";

import Logo from "../../assets/Kahoot_Logo.svg.png";
import { Button } from "../../components/Button";

const Home = () => {
  return (
    <div id="container_home">
      <div>
        <h1 class="title">SPTech Kahoot!</h1>
      </div>
      <div>
        <Button name="iniciar" />
      </div>
    </div>
  );
};

export default Home;
