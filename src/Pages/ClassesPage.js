import React, { useState, useEffect } from 'react';
import ClassList from '../components/Class.js';

function ClassesPage() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch('https://example.com/classes')
      .then(response => response.json())
      .then(data => setClasses(data));
  }, []);

  return (
    <div>
      <h1>Classes</h1>
      <ClassList classes={classes} />
    </div>
  );
}

export default ClassesPage;