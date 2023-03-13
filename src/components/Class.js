import React, { useState } from 'react';

function Class(props) {
  const { classObj, onSave, onCancel } = props;
  const [title, setTitle] = useState(classObj.title);

  const handleSave = () => {
    onSave(classObj.id, { title });
  };

  return (
      <div className="class-listli">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={handleSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
  );
}
export default Class;