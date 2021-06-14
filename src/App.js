import React, { useState, useEffect } from 'react';

import ChildOfApp from './ChildOfApp.js'

import './App.css'

function App() {
  const [header, setHeader] = useState('Time 2 Learn React Hooks!');

  useEffect(() => {
    const newheader = document.querySelectorAll('#header')[0];
    setTimeout(() => {
      newheader.innerHTML = header;
    }, 3000);
  });

  const handleHeaderInput = e => {
    setHeader(e.target.value);
  };

  return (
    <div className='App'>
      <ChildOfApp
        txt={`What it do yo?`}
      />
      <h3 id="header">This is a Functional Component</h3>
      <input
        type="text"
        onChange={handleHeaderInput}
        value={header}
      />
    </div>
  );
};

export default App;
