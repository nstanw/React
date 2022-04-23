import "./App.css";
import React from "react";
import { Component } from "react";
import Main from "./components/MainComponet";
import { DISHES } from "./shared/dishes";
import Menu from "./components/MenuComponents";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
    
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
