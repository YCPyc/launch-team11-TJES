import React from "react";
import {
  collection,
  doc,
  updateDoc,
  addDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import database from "./database.js";

function Student() {
  const db = database();

  const [studData, setStudData] = useState([]);

  useEffect(() => {
    const studData = [];
    getDocs(collection(db, "Student")).then((allDocs) => {
      allDocs.forEach((doc) => studData.push(doc.data()));
      setStudData(studData);
    });
  }, [db]);

    useEffect(() => {
        const studData = [];
        getDocs(collection(db, "Student"))
            .then((allDocs) => {
            allDocs.forEach((doc) => studData.push({id:doc.id, ...doc.data()}))
            setStudData(studData)
        })
    }, [db]);

    if(studData) {
        return(
            <div>
                <h1>Student Directory</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>Dietary Restrictions</th>
                            <th>Learning Restrictions</th>
                            <th>Class</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studData.map((cell) => {
                            return(
                                <tr key = {cell.id}>
                                    <td>{cell.name}</td>
                                    <td>{cell.DOB}</td>
                                    <td>{cell.dietRest}</td>
                                    <td>{cell.learnRest}</td>
                                    <td>{cell.class}</td>
                                    <td>{cell.grade}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
    else {
        return(
            <>
                <h1>Student Directory</h1>
                <h2>Data loading...</h2>
            </>
        )
    }
}

export default Student;
