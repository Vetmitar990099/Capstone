import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';
import User from './components/User.js';
import Class from './components/Class.js';

function App() {
  // define initial state for users and classes
  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // fetch users and classes data from your database
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
      
    fetch('/api/classes')
      .then((response) => response.json())
      .then((data) => setClasses(data));
  }, []);


  // define onUserUpdate function to update user data
  const onUserUpdate = (id, newData) => {
    setUsers(users => {
      // find the index of the user with the matching id
      const index = users.findIndex(user => user.id === id);

      // create a new copy of the users array with the updated user data
      const updatedUsers = [...users];
      updatedUsers[index] = {...updatedUsers[index], ...newData};

      return updatedUsers;
    });
  };

  // define onClassUpdate function to update class data
  const onClassUpdate = (id, newData) => {
    setClasses(classes => {
      // find the index of the class with the matching id
      const index = classes.findIndex(classObj => classObj.id === id);

      // create a new copy of the classes array with the updated class data
      const updatedClasses = [...classes];
      updatedClasses[index] = {...updatedClasses[index], ...newData};

      return updatedClasses;
    });
  };

  // render the User and Class components, passing down the relevant data and update functions as props
  return (
    <div>
      <h2>Users</h2>
      {users.map(user => (
        <User key={user.id} user={user} onSave={onUserUpdate} onCancel={() => {}} />
      ))}
      
      <h2>Classes</h2>
      {classes.map(classObj => (
        <Class key={classObj.id} classObj={classObj} onSave={onClassUpdate} onCancel={() => {}} />
      ))}
    </div>
  );
}

export default App;
