import React from 'react';
import './App.css';
import NavBar from "./components/navBar/NavBar";
import CustomCarousel from "./components/carousel/Carousal";
import TitleMessage from "./components/title-message/TitleMessage";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <NavBar/>
      <CustomCarousel/>
      <TitleMessage/>

    </div>
  );
}

export default App;
