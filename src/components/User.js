
import { useState } from 'react';

function User(props) {
  const { user, onSave, onCancel } = props;
  const [name, setName] = useState(user.name);

  const handleSave = () => {
    onSave(user.id, { name });
  };

  return (
    <div className="user-listli">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}
export default User;