import React from "react";
import { Routes, Route } from "react-router-dom";
import Userlist from '../Pages/userlist';
import UserDetails from '../Pages/userDetails';


export default function route() {
  return (
    <Routes>
          <Route path="/" element={<Userlist />} />
          <Route path="/userDetails/:id" element={<UserDetails />} />
        </Routes>
  );
}