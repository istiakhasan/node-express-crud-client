import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id}=useParams();
    const [findUser,setFindUser]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:4000/user/${id}`)
        .then(res=>res.json())
        .then(data=>setFindUser(data))
    })
    const  handleAddUser=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const email=e.target.email.value
        const updatedUser={name,email}
        fetch(`http://localhost:4000/user/${id}`,{
            method:"PUT",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("success",data)
            alert('user added successfully');
            e.target.reset()
           })
        
       }
    return (
        <div>
            <h2>Updating User:{findUser.name}</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' /><br />
                <input type="email" name='email' placeholder='Email' /><br />
                <input type="submit" value={"update User"} />
            </form>
        </div>
    );
};

export default UpdateUser;