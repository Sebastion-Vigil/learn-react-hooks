import React, { useState, useEffect } from 'react'

import './App.css'

const App = () => {
  const [userName, setUsername] = useState('johndoe')
  const [firstName, setFirstname] = useState('John')
  const [lastName, setLastname] = useState('Doe')

  useEffect(() => {
    setInterval(() => {
      setUsername('janedoe')
      setFirstname('Jane')
      setLastname('Doe')
    }, 5000)
  })

  const logName = () => {
    console.log(userName)
    console.log(firstName)
    console.log(lastName)
  }

  const handleUserNameInput = e => {
    setUsername({ userName: e.target.value })
  }
  const handleFirstNameInput = e => {
    setFirstname({ firstName: e.target.value })
  }
  const handleLastNameInput = e => {
    setLastname({ lastName: e.target.value })
  }

  return (
    <div className='App'>
      <h3>Time 2 Learn React Hooks!</h3>
      <input
        type='text'
        onChange={handleUserNameInput}
        value={userName}
        placeholder='Your Username'
      />
      <input
        type='text'
        onChange={handleFirstNameInput}
        value={firstName}
        placeholder='Your First Name'
      />
      <input
        type='text'
        onChange={handleLastNameInput}
        value={lastName}
        placeholder='Your Last Name'
      />
      <button className='btn btn-large right' onClick={logName}>
        Log Names
      </button>
    </div>
  )
}

export default App
