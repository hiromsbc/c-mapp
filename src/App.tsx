import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import Links from "./pages/Links";
import NotFound from './pages/NotFound';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/*"} element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;