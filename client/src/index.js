import React, { createContext } from "react";
import ReactDOM  from "react-dom";
import App from './App';
import UserStore from "./store/UserStore";
import ArticleStore from "./store/ArticleStore";

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    article: new ArticleStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);