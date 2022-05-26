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
import {collection, getDocs, getFirestore} from "firebase/firestore";
import firebaseApp from './firebase';


function App() {
  
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

    </div>
  );
}

export default App;
