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
import Classtwopage from './components/classtwopage';
import useState from 'react';


function App() {

  const firebaseConfig = {
   apiKey: process.env.REACT_APP_apiKey,
   authDomain: process.env.REACT_APP_authDomain,
   projectId: process.env.REACT_APP_projectId,
   storageBucket: process.env.REACT_APP_storageBucket,
   messagingSenderId: process.env.REACT_APP_messagingSenderId,
   appId: process.env.REACT_APP_appId
  };

  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app);

  //Michael Practing retreiving everything:
  
  /*
  const retreivesentences = () => {
    getDocs(collection(database, "Class"))
        .then((allDocs) => {allDocs.forEach((doc) => console.log(doc.data()))})
  }
  */
  

  return (

    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route  element={<Home/>} path="/" />
          <Route element={<Teacher/>} path="teacher" />
          <Route  element={<Student/>} path="student" />
          <Route  element={<Calendar/>} path="calendar" />
          <Route element={<Classtwopage db={database}/>} path="classtwopage" />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;