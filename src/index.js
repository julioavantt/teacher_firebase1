import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

//! Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCtMxi5VMngsaPWYpGU2ctO3KjemJF8gMg",
  authDomain: "coder-avantt.firebaseapp.com",
  projectId: "coder-avantt",
  storageBucket: "coder-avantt.appspot.com",
  messagingSenderId: "53496753971",
  appId: "1:53496753971:web:42609e79f191f7fa711846",
};

//! Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
