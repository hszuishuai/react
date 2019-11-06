import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
//import App from './App';
//import Home from './component/Home'

//redux
//import store from "./redux";
//import { Provider } from "react-redux";


//mobx
import { configure } from "mobx";
import { Provider } from "mobx-react";
import * as store from "./mobx";
import { createHashHistory } from "history";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { Router } from "react-router-dom";

import App from "./Router/App";
import * as serviceWorker from "./serviceWorker";
configure({ enforceActions: "observed" });
//import {BrowserRouter as Router ,Route,Link} from 'react-router-dom'

// const hasHistory: any = createHashHistory();
// const history: any = syncHistoryWithStore(hasHistory, new RouterStore());



ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
