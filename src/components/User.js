// import React from 'react';

// function UserList({ users }) {
//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>
//           <h2>{user.name}</h2>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserList;

// import React, { useState } from 'react';

// function UserList({ users, onUserUpdate }) {
//   const [editableUser, setEditableUser] = useState(null);

//   const handleEdit = (user) => {
//     setEditableUser(user);
//   };

//   const handleSave = () => {
//     onUserUpdate(editableUser);
//     setEditableUser(null);
//   };

//   const handleCancel = () => {
//     setEditableUser(null);
//   };

//   return (
//     <div>
//       {users.map(user => (
//         <div key={user.id}>
//           {editableUser && editableUser.id === user.id ? (
//             <div>
//               <input
//                 type="text"
//                 value={editableUser.name}
//                 onChange={(e) => setEditableUser({ ...editableUser, name: e.target.value })}
//               />
//               <input
//                 type="text"
//                 value={editableUser.email}
//                 onChange={(e) => setEditableUser({ ...editableUser, email: e.target.value })}
//               />
//               <input
//                 type="text"
//                 value={editableUser.phone}
//                 onChange={(e) => setEditableUser({ ...editableUser, phone: e.target.value })}
//               />
//               <button onClick={handleSave}>Save</button>
//               <button onClick={handleCancel}>Cancel</button>
//             </div>
//           ) : (
//             <div>
//               <h2>{user.name}</h2>
//               <p>Email: {user.email}</p>
//               <p>Phone: {user.phone}</p>
//               <button onClick={() => handleEdit(user)}>Edit</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default UserList;

// import { useState } from 'react';

// function User(props) {
//   const { user, onSave, onCancel } = props;
//   const [name, setName] = useState(user.name);

//   const handleSave = () => {
//     onSave(user.id, { name });
//   };

//   return (
//     <div>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       <button onClick={handleSave}>Save</button>
//       <button onClick={onCancel}>Cancel</button>
//     </div>
//   );
// }

import { useState } from 'react';

function User(props) {
  const { user, onSave, onCancel } = props;
  const [name, setName] = useState(user.name);

  const handleSave = () => {
    onSave(user.id, { name });
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
export default User;