import React, { Component } from "react";
import { Provider } from "react-redux";

import Main from "./containers/container-product-table";
import store from "./store";


const App = () => (
  <div className="cont-box">
        <Provider store={store}>
          <Main />
        </Provider>
  </div>
);

export default App;