// src/components/UserDetails.js
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const UserDetails = () => {
  const { userlist, error } = useContext(UserContext);
  const { id } = useParams();
  const user = userlist.find(user => user.id.toString() === id);

  if (error) {
    return  <div class="error-container">
    <h1>Oops! Something went wrong.</h1>
    <p>Please try again later or <a href="/">return to the homepage</a>.</p>
   </div>;
  }
  return (
    <>
    <h2 style={{textAlign:"center"}}>User Information </h2>
    <div class="card">
    <div style={{margin: "24px 0",padding:"20px"}}>
        <p><span>First Name:</span>{user.name.split(' ')[0]}</p> 
        <p><span>Last Name:</span>{user.name.split(' ').slice(1).join(' ')}</p>  
        <p><span>Username:</span>{user.username}</p>  
        <p><span>Email:</span>{user.email}</p> 
        <p><span>Phone:</span>{user.phone}</p> 
        <p><span>Website:</span>{user.website}</p> 
        <p><span>Company:</span>{`${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`}</p> 
        <p><span>Address:</span>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`} </p> 
    </div>
    <p><Link to="/" className="back-button">Back</Link></p>
    </div>
    </>
  );
};

export default UserDetails;
