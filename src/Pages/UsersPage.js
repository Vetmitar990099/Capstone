import React, { useState, useEffect } from 'react';
import UserList from '../components/User';

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://example.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <UserList users={users} />
    </div>
  );
}

export default UsersPage;