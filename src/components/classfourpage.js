import {
  collection,
  doc,
  updateDoc,
  addDoc,
  getDocs,
  getDoc,
  getFirestore,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
//import { DataGrid } from '@mui/x-data-grid';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";

function Classfourpage({ db }) {
  const [responses, setResponses] = useState([]);
  const [classArray, setClassArray] = useState();
  const [studentsArray, setStudentsArray] = useState([]);
  const [secondArray, setSecondArray] = useState([]);
  const [listOfStudents, setListOfStudents] = useState("");
  const [arrayOfStudents, setArrayOfStudents] = useState([]);
  const [otherList, setOtherList] = useState("");
  const textFieldRef = useRef(null);
  const [nameString, setnameString] = "Class2Student";
  const [finalList, setFinalList] = [];
  const otherRef = useRef();
  const editRefOne = useRef();
  const editRefTwo = useRef();
  const editRefThree = useRef();
  const [editBox, setEditBox] = useState(false);
  let studentnumber = 7;
  //let nameString = "Class2Student";

  useEffect(() => {
    const responses = [];
    getDocs(collection(db, "Class")) // get the collection
      .then((allResponses) => {
        // format each response into an array as we want it
        allResponses.forEach((response) =>
          responses.push({ id: response.id, ...response.data() })
        );
        setResponses(responses);
      });
    getStudents();
  }, [db]);

  const getStudents = () => {
    const rsp = [];
    const nms = [];
    const grades = [];
    getDocs(collection(db, "Class/Class4/Class4Students")) // get the collection
      .then((allResponses) => {
        // format each response into an array as we want it
        allResponses.forEach((response) =>
          rsp.push({ id: response.id, ...response.data() })
        );
        //console.log(rsp)
        setStudentsArray(rsp);
        rsp.forEach((i) => nms.push(i.id, i.grade));
        //rsp.forEach((i) => nms.push(i.grade))
        console.log(nms);
        //setClassArray(rsp[0])
        //delete rsp[0].id
        //console.log(Object.values(rsp[0]))
        setListOfStudents(Object.values(nms).join(", "));
        //setOtherList();
      });
  };

  function getid(item) {
    const tlist = [];
    console.log(item.id);

    return;
  }

  const [classData, setClassData] = useState();
  useEffect(() => {
    const classes = [];
    getDoc(doc(db, "Class", "Class4")).then((allResponses) => {
      console.log(allResponses.data());
      //allResponses.forEach((c) => classes.push({ id: c.id, ...c.data() }));
      setClassData(allResponses.data());
      console.log(classData);
    });
  }, [db]);

  const addResponse = (e) => {
    e.preventDefault(); // no reloading the page
    console.log("text field ref: ", otherRef.current.value);

    //const newResponse = textFieldRef.current.value

    const data = {};
    const ResponseName = {
      //nameString: textFieldRef.current.value
    };

    setDoc(
      doc(db, "Class/Class4/Class4Students", otherRef.current.value),
      data
    ); // add the new response

    setDoc(doc(db, "Student", otherRef.current.value), {
      DOB: "n/a",
      class: classData.ClassName,
      dietRest: "n/a",
      learnRest: "n/a",
      name: otherRef.current.value,
    });

    //addDoc((doc(db,"Class/Class2/Class2Students", textFieldRef.current.value)))

    getStudents();

    otherRef.current.value = ""; // clear the text field
  };

  const deleteResponse = (e) => {
    e.preventDefault();

    //console.log("running delete response")
    //console.log(textFieldRef.current.value)

    deleteDoc(
      doc(db, "Class/Class4/Class4Students", textFieldRef.current.value)
    );
    deleteDoc(doc(db, "Student", textFieldRef.current.value));

    getStudents();

    textFieldRef.current.value = "";
  };

  const tableDeleteResponse = (input) => {
    //e.preventDefault();

    //console.log("running delete response")
    //console.log(textFieldRef.current.value)

    deleteDoc(doc(db, "Class/Class4/Class4Students", input));
    deleteDoc(doc(db, "Student", input));

    getStudents();

    //textFieldRef.current.value = ""
  };

  const editGrade = (e) => {
    e.preventDefault();

    updateDoc(
      doc(db, "Class/Class4/Class4Students", editRefOne.current.value),
      {
        grade: editRefTwo.current.value,
      }
    );

    updateDoc(doc(db, "Student", editRefOne.current.value), {
      grade: editRefTwo.current.value,
    });

    getStudents();

    editRefTwo.current.value = "";
    editRefOne.current.value = "";
  };

  const tableEditGrade = (input1) => {
    //e.preventDefault();

    console.log(input1);
    console.log(editRefThree.current.value);
    updateDoc(doc(db, "Class/Class4/Class4Students", input1), {
      grade: editRefThree.current.value,
    });
    updateDoc(doc(db, "Student", input1), {
      grade: editRefThree.current.value,
    });

    getStudents();

    editRefThree.current.value = "";
    //editRefTwo.current.value = ""
    //editRefOne.current.value = ""
  };
  if (responses) {
    console.log(responses[2]);
  }

  const [students, setStudents] = useState();
  useEffect(() => {
    const ss = [];
    getDocs(collection(db, "Class", "Class4/Class4Students")).then(
      (allResponses) => {
        allResponses.forEach((s) => {
          if (responses) {
            setDoc(doc(db, "Student", s.id), {
              name: s.id,
              DOB: "n/a",
              class: responses[2].ClassName,
              dietRest: "n/a",
              learnRest: "n/a",
              grade: s.data().grade,
            });
          }
        });
      }
    );
  }, [db]);

  /*
    <div>
              <form onSubmit={editGrade}>
              <h2>Edit Student Grade:</h2>
              <label>Name: <input type="text" ref={editRefOne} /> </label>
              <label>Grade: <input type="text" ref={editRefTwo} /> </label> 
              <input type="Submit" />
              </form>
    </div>
    */

  if (responses.length > 0 && studentsArray.length >= 0)
    return (
      <div>
        <div>
          <h1 className="display">Class Page</h1>
          <h3 className="display">Class: {responses[2].ClassName}</h3>
          <h3 className="display">Subject: {responses[2].Subject}</h3>
          <h3 className="display">
            Teacher: {responses[2].Teacher._key.path.segments[6]}
          </h3>

          <h3></h3>
        </div>
        <p></p>

        <div></div>

        <div>
          <h2>Add Student:</h2>
          <form onSubmit={addResponse}>
            <input type="text" ref={otherRef} />
            <input type="Submit" />
          </form>
        </div>

        <div>
          <h1>Class Roster:</h1>
          <TableContainer component={Paper}>
            <Table aria-label="Roster">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Grade</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentsArray.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.grade}</TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        onClick={() => tableDeleteResponse(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            variant="contained"
            onClick={() => setEditBox((editBox) => !editBox)}
          >
            Edit Grades
          </Button>
        </div>

        <div>
          {editBox == true && (
            <form onSubmit={editGrade}>
              <label>
                Name: <input type="text" ref={editRefOne} />{" "}
              </label>
              <label>
                Grade: <input type="text" ref={editRefTwo} />{" "}
              </label>
              <input type="Submit" />
            </form>
          )}
        </div>
      </div>
    );
}

export default Classfourpage;
