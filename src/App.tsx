import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Links from "./pages/Links";

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/links"} element={<Links/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;