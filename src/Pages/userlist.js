// src/components/UserList.js
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const UserList = () => {
  const { userlist, error } = useContext(UserContext);
  const [filter, setFilter] = useState('');

  let filteredData = userlist;

  if (filter) {
    const lowerCaseFilter = filter.toLowerCase();
    filteredData = userlist.filter(
      (dt) =>
        dt.username.toLowerCase().includes(lowerCaseFilter) ||
        dt.email.toLowerCase().includes(lowerCaseFilter)
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="search-wrap">
          <div className="search-left">
            <h3>User Table</h3>
          </div>
          <div className="search-right">
             <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
            className="search-input"
          /></div>
        </div>
        <table className="classic-table">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Username</th>
              <th>Email</th>
              <th style={{textAlign:'center'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.username}</td>
                <td>{entry.email}</td>
                <td style={{textAlign:'center'}}>
                  <Link to={`/userDetails/${entry.id}`} className="view-button">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
