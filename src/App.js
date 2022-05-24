import './App.css';
import { BrowserRouter,
  Routes,
  Route, 
} from 'react-router-dom';
import Home from './components/home';
import NavBar from './components/navbar';
import Teacher from './components/teacher';
import Student from './components/student';
import Calendar from './components/calendar';
import { initializeApp } from "firebase/app";
import {collection, doc, updateDoc, addDoc, getDocs, getFirestore} from "firebase/firestore";

//Test Push

function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyCJTsf-MF41gqqyZP1ZRP4uG9xkuTh3Wvs",
    authDomain: "week1-team11.firebaseapp.com",
    projectId: "week1-team11",
    storageBucket: "week1-team11.appspot.com",
    messagingSenderId: "574163223150",
    appId: "1:574163223150:web:e1d12475d686c0b837dc7f"
  };

  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app);

  const retreivesentences = () => {
    getDocs(collection(database, "Class"))
        .then((allDocs) => {allDocs.forEach((doc) => console.log(doc.data()))})
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route  element={<Home/>} path="/" />
          <Route element={<Teacher/>} path="teacher" />
          <Route  element={<Student/>} path="student" />
          <Route  element={<Calendar/>} path="calendar" />
        </Routes>
      </BrowserRouter>

    <div>
      {retreivesentences()}
    </div>
    </div>
  );
}

export default App;
