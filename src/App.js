import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import routes from "./routes";

function App(props) {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
