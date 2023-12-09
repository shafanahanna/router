import React from 'react'
import { Link } from 'react-router-dom'

function Login() {


  
  return (
    <div style={{backgroundColor:'#f1f1f1', padding:'20px 0px',marginTop:'50px',border:'2px solid black'}}>
    <label>User Name : </label>
    <input type='text' placeholder='enter name'></input><br /><br />
    <label>Password : </label>
    <input type='password' placeholder='password'></input><br /><br />
    <Link to='/home'><button>Login</button></Link>
    </div>
    
  )
}

export default Login