import React, {useEffect} from "react";
import { Login } from "../src/components/pages/Login/Login"
import { Home } from "../src/components/pages/Home/Home"
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { checkAuthStatus } from "./actions";
import PostList from "./components/pages/Posts/PostList";
function App() {
  useEffect(() => {
    store.dispatch(checkAuthStatus());
  }, [])
  return (
    <Provider store={store}>
      <div className="main">
        <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Login/>}/>
                  <Route path="/home" element={<PostList/>}/>
              </Routes>
          </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;