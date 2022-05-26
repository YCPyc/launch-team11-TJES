import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navbar";
import Teacher from "./components/teacher";
import Student from "./components/student";
import Calendar from "./components/calendar";
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  updateDoc,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import Classtwopage from "./components/classtwopage";
import Classonepage from "./components/classonepage";
import Classthreepage from "./components/classthreepage";
import Classfourpage from "./components/classfourpage";
import useState from "react";

import { initializeApp } from "firebase/app";




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

<<<<<<< HEAD
  //Michael Practing retreiving everything:

  // const retreivesentences = () => {
  //   getDocs(collection(database, "Class"))
  //       .then((allDocs) => {allDocs.forEach((doc) => console.log(doc.data()))})
  // }
=======
>>>>>>> d4d70b0b51228d4c0daba3f0c89e3b13243541b0

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
<<<<<<< HEAD
          <Route element={<Home />} path="/" />
          <Route element={<Teacher />} path="teacher" />
          <Route element={<Student />} path="student" />
          <Route element={<Calendar />} path="calendar" />
          <Route element={<Classtwopage db={database} />} path="classtwopage" />
          <Route element={<Classonepage db={database} />} path="classonepage" />
          <Route
            element={<Classthreepage db={database} />}
            path="classthreepage"
          />
          <Route
            element={<Classfourpage db={database} />}
            path="classfourpage"
          />
=======
          <Route element={<Home db={database} />} path="/" />
          <Route element={<Teacher />} path="teacher" />
          <Route element={<Student />} path="student" />
          <Route element={<Calendar />} path="calendar" />
>>>>>>> d4d70b0b51228d4c0daba3f0c89e3b13243541b0
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
