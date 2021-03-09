import './App.css';
import UserList from "./UserList";
import { Card } from "react-bootstrap";

function App() {
  const listOfUser = UserList();
  return (
    <div className="App">
       <h1> List Of Users </h1>
            <div className='card_cont' >
            {listOfUser.map(user=><div key={user.id} className='card_cont' > 
            <Card className="user" style={{ width: '16rem' }}>
              <Card.Body>
                <Card.Title><span>Name :</span> {user.name}</Card.Title>
                <Card.Title><span>Username :</span> {user.username}</Card.Title>
                <Card.Title><span>E-mail :</span> {user.email}</Card.Title>
                <Card.Title><span>Adress :</span> {user.address.street} ,
                                      {user.address.suite} ,
                                      {user.address.city} ,
                                      {user.address.zipcode}.</Card.Title>
                <Card.Title><span>Phone :</span> {user.phone}</Card.Title>
                <Card.Title><span>Web-Site :</span> {user.website}</Card.Title>
                <Card.Title><span>Company Name :</span> {user.company.name}</Card.Title>
                <Card.Title><span>Company Catch Phrase :</span> {user.company.catchPhrase}</Card.Title>
                <Card.Title><span>Company Bs:</span> {user.company.bs}</Card.Title>
              </Card.Body>
            {/* <ListGroup className="list-group-flush">
              <ListGroupItem>Cras justo odio</ListGroupItem>
              <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup> */}
          </Card>
          </div>)
            }
           </div> 
    </div>
  );
}

export default App;
