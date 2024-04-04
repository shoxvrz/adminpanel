import { useState } from 'react'
import './App.css'
import List from './component/List/List.jsx'
import Navbar from './component/Navbar/Navbar'
import axios from "axios";

function App() {
  const [user, setUser] = useState({
    name: '',
    number: '',
    email: '',
    gender: ''
  })
  
  const deleteHandler = async (userId) => {
window.location.reload()

    const response = await axios.delete(`http://localhost:3000/user/${userId}` )

    console.log(response);
  }

  const submitHandler = async () => {
    window.location.reload();

    const response = await axios.post("http://localhost:3000/user", user);

    if(response.status === 201){
      setUser((prev) => !prev);
      setUser({
        name: '',
        number: '',
        image: '',
        email: ''
      })
    }
  }
  

  console.log(user);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value =      e.target.type === "file"
    ? URL.createObjectURL(e.target.files[0])
    : e.target.value;

    setUser((prev) => {
      return{...prev, [name] : value}
    })
  }


 
  return (
    <>
     <div className="app">
      <Navbar inputHandler={inputHandler} submitHandler={submitHandler}/>
      <List  deleteHandler={deleteHandler}/>
     </div>
    </>
  )
}

export default App
