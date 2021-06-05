import React, { useState } from 'react';

import './App.css'

const App = () => {
  const [name, setName] = useState('');

  const alertName = () => {
    alert(name);
    setName('')
  };

  const handleNameInput = e => {
    setName(e.target.value);
  };

  return (
    <div className='App'>
      <h3>Time 2 Learn React Hooks!</h3>
      <input
        type="text"
        onChange={handleNameInput}
        value={name}
        placeholder="Type your name"
      />
      <button onClick={alertName}>
        Smash!
      </button>
    </div>
  );
};

export default App;