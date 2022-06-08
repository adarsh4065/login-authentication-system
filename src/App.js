import './App.css';
import React from 'react';
import ReactDOM from "react-dom";
import Form from './signup';
import Form2 from './signin';
import Success from './success';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-light bg-secondary">
      <a id="home-link" className="navbar-brand" target="_blank" href="signin.js" style={{ color: "white" }}   >
        LOGIN
      </a>
    </nav>
  );
}

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Form />} />
        <Route exact path={"/signin"} element={<Form2 />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
