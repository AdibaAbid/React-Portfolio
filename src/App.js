import React from 'react';
import './App.css';
import NavBar from "./components/navBar/NavBar";
import CustomCarousel from "./components/carousel/Carousal";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./views/about/About";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";


function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <NavBar/>
      <CustomCarousel/>
      <TitleMessage/>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade left duration={2000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
     
    </div>
  );
}

export default App;
