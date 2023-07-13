import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";

import App from "./App";

//! Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARZLg6V0Tw2JtkQFhljSsIrJXUd3gCtN8",
  authDomain: "cats-fb7f1.firebaseapp.com",
  projectId: "cats-fb7f1",
  storageBucket: "cats-fb7f1.appspot.com",
  messagingSenderId: "925408765138",
  appId: "1:925408765138:web:0b1f6cc7fcefe85277390b",
};

//! Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
