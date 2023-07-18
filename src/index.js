import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

import App from "./App";

//! Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxY8fcXyB57OufA1y9xr3OL4ivk8FWvFo",
  authDomain: "ecommerceunicorns.firebaseapp.com",
  projectId: "ecommerceunicorns",
  storageBucket: "ecommerceunicorns.appspot.com",
  messagingSenderId: "273077173372",
  appId: "1:273077173372:web:444f4fb1bfdae63370ddf9",
};

//! Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
