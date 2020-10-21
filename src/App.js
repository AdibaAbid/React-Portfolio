import React from 'react';
import './App.css';
import NavBar from "./components/navBar/NavBar";
import CustomCarousel from "./components/carousel/Carousal";
import TitleMessage from "./components/title-message/TitleMessage";
import About from "./views/about/About";
import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import Bounce from 'react-reveal/Bounce';
import Container from "react-bootstrap/Container";
import Skills from "./views/skills/Skills";
import PreLoader from './loader/Loader'


function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <PreLoader/>
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
      <div>
  
          <div>
            <Container className="container-box rounded">
              <Bounce  right duration={2000}>
              <Skills/>
              </Bounce >
            </Container>
          </div>
      </div>
    
    </div>
  );
}

export default App;
