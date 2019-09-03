import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css'
//import App from './App';
//import Home from './component/Home'
import { ConfigProvider  } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import {Provider}from "react-redux"
import store from "./redux"
//import {BrowserRouter as Router ,Route,Link} from 'react-router-dom'
import App from "./Router/App"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
