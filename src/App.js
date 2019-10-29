import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import slides from "./slides";

function App() {
  return (
    <div className="App">
      <Carousel slidesData={slides} />
    </div>
  );
}

export default App;
