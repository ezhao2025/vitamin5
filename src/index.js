import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Router
import { BrowserRouter } from "react-router-dom";

// Theme (styled-components version)
import { ThemeProvider } from "styled-components";

// Simple theme object (you can customize later)
const theme = {
  colors: {
    primary: "#4CAF50",
    secondary: "#333",
    background: "#f5f5f5",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

//
//
//// NEW IMPORTS
//import { BrowserRouter } from "react-router-dom";
//import { ThemeProvider } from "styled-components"; // or from MUI depending on your setup
//
//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);
//
//// If you want to start measuring performance in your app, pass a function
//// to log results (for example: reportWebVitals(console.log))
//// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
