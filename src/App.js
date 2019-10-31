import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./ducks/store";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <style>
          @import
          url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');
        </style>
        <Header />
        {routes}
      </div>
    </Provider>
  );
}

export default App;
