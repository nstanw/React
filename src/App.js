import "./App.css";
import { Component } from "react";
import Main from "./components/MainComponet";
import { DISHES } from "./shared/dishes";
import Menu from "./components/MenuComponents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
    };
  }
  render() {
    return (
      <div>
        {/* <Main /> */}
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
