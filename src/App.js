import "./App.css";
import React from "react";
import { Component } from "react";
import Main from "./components/MainComponet";
import { DISHES } from "./shared/dishes";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
    
  }
  render() {
    return (
  
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
    
    );
  }
}

export default App;
