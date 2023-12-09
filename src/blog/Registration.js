import React from 'react'
import { Link } from 'react-router-dom'


function Registration() {

  return (
    <div style={{backgroundColor:'#f1f1f1', padding:'20px 0',marginTop:'80px',border:' 2px solid black '}}>
        <form>
            <lebel>First Name</lebel>
            <input type='text'></input><br /><br />
            
            <lebel>Last Name</lebel>
            <input type='text'></input><br /><br />

            <label>Gender : </label>
            <lebel >Male</lebel><input type='Radio' name='gender' value={'Male'}></input>
            <lebel>Female</lebel><input type='Radio' name='gender' value={'Female'}></input>
            <lebel>Other</lebel><input type='Radio' name='gender' value={'NotHumen'}></input>
            <br /><br />

            <label>Email</label>
            <input type='text' placeholder='Enter e-mail '></input><br /><br />

            <label>Phone</label>
            <input type='text' placeholder='phone no'></input><br /><br />

            <label>Address</label>
            <input type='textarea'></input><br /><br />
            <Link to='/login'><button>Sign In</button></Link>
        </form>
        
    </div>
  )
}

export default Registration