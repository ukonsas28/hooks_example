import React from "react";
import "./App.css";
import { Component } from "./Component";
import { EventComponent } from "./EventComponent";
import { ImperativeComponent } from "./ImperativeComponent";

function App() {
  return (
    <div className="App">
      <Component />
      <ImperativeComponent />
      <EventComponent />
    </div>
  );
}

export default App;
