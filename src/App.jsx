import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token')

async function submitForm(e) {
    e.preventDefault()
    console.log(email);
    console.log(password);
    setEmail('');
    setPassword('');

    if (password.length < 8) {
      setErrorMessage("Password is too short!")
    } else {
      setEmail('');
      setPassword('');
    }
    const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
    { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json" 
      }, 
      body: JSON.stringify({ 
        username: email, 
        password: password 
      }) 
    })
    // const data = await response.json()
    const { token}  = await response.json()
    localStorage.setItem('token', token);
    console.log(data);
  }

  return (
   
      <div>
        
      <h1>Capstone Project 2</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>
        <input value={email}  //controls the input value
         type="email" 
         id="email"
         onChange={(e) => { 
          setErrorMessage('');
          console.log(e.target.value);
          setEmail(e.target.value)
         }}
         />
        <label htmlFor="password">Password</label>
        <input value={password} 
        type="password" 
        id="password"
        onChange={(e) => {
          setErrorMessage('');
          console.log(e.target.value);
          setPassword(e.target.value)
        }}
               
        />
        <p>{errorMessage}</p>

        <button type="submit">Login</button>
      </form>
      
      </div>
     
  )
}

export default App
