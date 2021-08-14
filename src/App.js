import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import "./App.css";
import routes from './routes';
import TopicList from "./Components/TopicList/TopicList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
