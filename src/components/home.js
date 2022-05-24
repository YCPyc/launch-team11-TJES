import React, {useState, useEffect} from "react"
import {collection, getDocs} from "firebase/firestore"
import ClassObj from "./ClassObj"

function Home({db}){
    const [data, setData] = useState()

    useEffect(() => {
      const classes = []
      getDocs(collection(db, "Class"))
      .then((allResponses) => {
        allResponses.forEach((c) => classes.push({id: c.id, ...c.data()}));
        console.log(classes);
        setData(classes)
      })
    }, [db])

    const retreivesentences = () => {
      getDocs(collection(db, "Class"))
          .then((allDocs) => {allDocs.forEach((doc) => console.log(doc.data()))})
    }

    return(
        <>
        {retreivesentences()}
        <p>home page</p>
        {data && data.map((cl) => <ClassObj info={cl} />)}
        </>
    );
}

export default Home;