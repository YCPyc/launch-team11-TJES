import {collection, getDocs, getFirestore, Timestamp, doc, setDoc, deleteDoc} from "firebase/firestore";
import firebaseApp from '../firebase';
import { Form, Button, Card } from 'react-bootstrap';
import '../App.css';
import {useState, useEffect, useRef} from "react"


function Calendar(){
    const [events,setEvents] = useState([]);
    const [pastEvents,setPastEvents] = useState([]);
    const [name,setName] = useState("");
    const [date,setDate] = useState("");
    const [des,setDes] = useState("");

    const nameField = useRef(null);
    const dateField = useRef(null);
    const desField = useRef(null);
   
    //firebase connection
    const db = getFirestore(firebaseApp);
    // const data = getDocs(collection(db, "Calendar"))
    // .then((allDocs) => {allDocs.forEach((doc) => console.log(doc.data()))})

    //in action whhen page load
    useEffect(()=>{
        getEvents();
    },[db]);

    const getEvents = () =>{
        const eventList =[];
        const pastEventList =[];
      
        const now = Timestamp.now();
        let nowDate = now.toDate();
        nowDate.setHours(0,0,0,0);
 
        getDocs(collection(db, "Calendar"))
        .then((allDocs) => {
            allDocs.forEach((doc) => {
            let currDate = doc.data().date.toDate();
            currDate.setHours(0);
            (doc.data().date.toDate().setHours(0,0,0,0) < nowDate ? pastEventList.push({id:doc.id,...doc.data()}) : eventList.push({id:doc.id,...doc.data()}));
            eventList.sort((a, b) => (a.date>=now && b.date>=now && a.date > b.date) ? 1 : -1);
            setEvents(eventList);
            setPastEvents(pastEventList)})
            
        })
    }
    console.log(events);

    const addEvent= (e) =>{
        e.preventDefault();
        const d = new Date(dateField.current.value.replace(/-/g, '\/'))
        const date_TimeStamp =Timestamp.fromDate(d)
        console.log("added og time:"+ dateField.current.value)
        console.log("added og time:"+ d)
        console.log("added time:"+ d.toLocaleString('en-US', { timeZone: 'America/New_York' }))
        const newEvent = {
            date: date_TimeStamp,
            description: desField.current.value
        }
        setDoc(doc(db,"Calendar",nameField.current.value),newEvent)
        .then((docRef)=>{
            setEvents([...events,{id:docRef.id, ...newEvent}])
        .catch((e) => console.error(e))
        });
        dateField.current.value = "" ;
        nameField.current.value = "" ;
        desField.current.value = "" ;
        getEvents();

    }

    const deleteEvent = (e) =>{
        deleteDoc(doc(db,"Calendar",e.target.value));
        getEvents();
    }

    return(
        <div className="calendar-container">
            <div className="calendar-form-container">
            <Form className="calendar-form" onSubmit={addEvent}>
                <Form.Group className="mb-3" controlId="formBasicEvent">
                    <Card.Header as="h5">Create Events</Card.Header>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Event Name" ref={nameField} onChange={(e) => setName(e.target.value)} />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="date" ref={dateField} onChange={(e) => setDate(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDes">
                    <Form.Label>Event Descirption</Form.Label>
                    <Form.Control type="text" placeholder="Enter Event Description" ref={desField} onChange={(e) => setDes(e.target.value)} />
                   
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
            </div>
            <div className="calendar-events">
                <h1 style={{ width: '100%' }}>Upcoming Events:</h1>
                <br/>
                {events.length != 0? 
                events.map((event) =>  
                (
                <Card style={{ width: '15rem' }} key={event.id}>
                    <Card.Body>
                        <Card.Title>{event.id}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{event.date.toDate().toDateString()}</Card.Subtitle>

                        <Card.Text>
                        {event.description}
                        </Card.Text>
                        <Button variant="danger" value={event.id} onClick={deleteEvent}>Delete</Button>
                    </Card.Body>
                </Card> )
            ) : <h2>No Events yet</h2>}

            <h1 style={{ width: '100%' }}>Past Events:</h1>
            <br/>
            {events.length != 0? 
                pastEvents.map((event) =>  
                (
                <Card style={{ width: '15rem' }} key={event.id}>
                    <Card.Body>
                        <Card.Title>{event.id}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{event.date.toDate().toDateString()}</Card.Subtitle>
                        <Card.Text>
                        {event.description}
                        </Card.Text>
                        <Button variant="danger" value={event.id} onClick={deleteEvent}>Delete</Button>
                    </Card.Body>
                </Card> )
            ) : <h2>No Events yet</h2>}
            

            
            </div>
             
            
        </div>
       
    );
}

export default Calendar;