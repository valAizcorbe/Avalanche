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
        <Header />
        {routes}
      </div>
    </Provider>
  );
}

export default App;
