import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users,setUsers]=useState([])
    useEffect(()=>{
       fetch('http://localhost:4000/user')
       .then(res=>res.json())
       .then(data=>setUsers(data))
    },[])
    
    const handleUserDelete=id=>{
        const process=window.confirm("are you sure to delete this item??")
        if(process){

           
            const url = `http://localhost:4000/user/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    console.log('deleted')
                    const remaining=users.filter(user=>user._id !==id)
                    setUsers(remaining)
                }
            })


        }
    }
   

    return (
        <div>
            <h1>This is home {users.length}</h1>
            <ul>
                {
                   users.map(user=><li key={user._id}>{user.name}::{user.email}
                   
                   <Link to={`/update/${user._id}`}>Update</Link>
                   {/* <Link to={"update/"+user._id}>Update</Link> */}
                   <button
                   onClick={()=>handleUserDelete(user._id)}
                   >x</button></li>) 
                }
            </ul>
        </div>
    );
};

export default Home;