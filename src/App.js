import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Teacher from "./components/teacher";
import Student from "./components/student";
import Calendar from "./components/calendar";

import { initializeApp } from "firebase/app";

import firebaseApp from "./firebase";
import Classonepage from "./components/classonepage";
import Classtwopage from "./components/classtwopage";
import Classthreepage from "./components/classthreepage";
import Classfourpage from "./components/classfourpage";

import {
  collection,
  doc,
  updateDoc,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

function App() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
  };

  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home db={database} />} path="/" />
          <Route element={<Teacher />} path="teacher" />
          <Route element={<Student />} path="student" />
          <Route element={<Calendar />} path="calendar" />

          <Route
            element={<Classtwopage db={database} />}
            path="6th%20Grade%20Biology"
          />
          <Route
            element={<Classonepage db={database} />}
            path="2nd%20Grade%20Homeroom"
          />
          <Route
            element={<Classthreepage db={database} />}
            path="5th%20Grade%20Math"
          />
          <Route
            element={<Classfourpage db={database} />}
            path="4th%20Grade%20English"
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
