// import React from 'react';

// function ClassList({ classes }) {
//   return (
//     <div>
//       {classes.map(cls => (
//         <div key={cls.id}>
//           <h2>{cls.title}</h2>
//           <p>Description: {cls.description}</p>
//           <p>Duration: {cls.duration}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ClassList;

import React, { useState } from 'react';

// function ClassList({ classes, onClassUpdate }) {
//   const [editableClass, setEditableClass] = useState(null);

//   const handleEdit = (cls) => {
//     setEditableClass(cls);
//   };

//   const handleSave = () => {
//     onClassUpdate(editableClass);
//     setEditableClass(null);
//   };

//   const handleCancel = () => {
//     setEditableClass(null);
//   };

//   return (
//     <div>
//       {classes.map(cls => (
//         <div key={cls.id}>
//           {editableClass && editableClass.id === cls.id ? (
//             <div>
//               <input
//                 type="text"
//                 value={editableClass.title}
//                 onChange={(e) => setEditableClass({ ...editableClass, title: e.target.value })}
//               />
//               <input
//                 type="text"
//                 value={editableClass.description}
//                 onChange={(e) => setEditableClass({ ...editableClass, description: e.target.value })}
//               />
//               <input
//                 type="text"
//                 value={editableClass.duration}
//                 onChange={(e) => setEditableClass({ ...editableClass, duration: e.target.value })}
//               />
//               <button onClick={handleSave}>Save</button>
//               <button onClick={handleCancel}>Cancel</button>
//             </div>
//           ) : (
//             <div>
//               <h2>{cls.title}</h2>
//               <p>Description: {cls.description}</p>
//               <p>Duration: {cls.duration}</p>
//               <button onClick={() => handleEdit(cls)}>Edit</button>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ClassList;

function Class(props) {
  const { classObj, onSave, onCancel } = props;
  const [title, setTitle] = useState(classObj.title);

  const handleSave = () => {
    onSave(classObj.id, { title });
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
export default Class;