import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Introduction from "./Components/Pages/Introduction";

// import App from "./App";
import Layout from "./Components/Layout/Layout";
import Progress from "./Components/Pages/Progress";
import ContactMe from "./Components/Pages/ContactMe";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>

        <Route path="/" 
        element={<Introduction/>} />

        <Route path="/Progress" 
        element={<Progress/>} />

        <Route path="/ContactMe" 
        element={<ContactMe/>} />

      </Route>
    </Routes>
  </BrowserRouter>
);
