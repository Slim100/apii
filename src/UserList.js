import {useState , useEffect} from'react'
import axios from 'axios';

function UserList() {

    const [listOfUser,setListOfUser] = useState([]); 

    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(reponse => {
            setListOfUser(reponse.data)
        })
        .catch(er=> {console.log(er)})
    } 
       ,[]);     
     return listOfUser
}
export default UserList 