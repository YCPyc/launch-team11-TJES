import React from "react";
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  updateDoc,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import database from "./database.js";

function Teacher() {
  const db = database();

  const [teachData, setStudData] = useState([]);

  useEffect(() => {
    const teachData = [];
    getDocs(collection(db, "Teacher")).then((allDocs) => {
      allDocs.forEach((doc) => teachData.push(doc.data()));
      setStudData(teachData);
    });
  }, [db]);

  console.log(teachData);
  //console.log(teachData[0].class)
  if (teachData) {
    return (
      <div>
        <h1 className="display">Teacher Directory</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Credentials</th>
              <th>Subject</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {teachData.map((cell) => {
              return (
                <tr>
                  <td>{cell.name}</td>
                  <td>{cell.DOB}</td>
                  <td>{cell.cred}</td>
                  <td>{cell.subjects}</td>
                  <td>{cell.class}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  } else {
    return (
      <>
        <h1>Teacher Directory</h1>
        <h2>Data loading...</h2>
      </>
    );
  }
}

export default Teacher;
