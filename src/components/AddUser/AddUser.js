import React from 'react';

const AddUser = () => {
  const  handleAddUser=(e)=>{
     e.preventDefault()
     const name=e.target.name.value
     const email=e.target.email.value
     const user={name,email}
     fetch('http://localhost:4000/user',{
         method:"POST",
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify(user)
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
            <h2>Please add a new user</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' /><br />
                <input type="email" name='email' placeholder='Email' /><br />
                <input type="submit" value={"submit"} />
            </form>
        </div>
    );
};

export default AddUser;