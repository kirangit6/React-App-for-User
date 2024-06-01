
import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userlist, setUserlist] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
      })
      .then(
        (result) => {
          setUserlist(result);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <UserContext.Provider value={{ userlist, error }}>
      {children}
    </UserContext.Provider>
  );
};
