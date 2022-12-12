import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

const Register = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setNama] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
      }

    return (
        <>
        <form onSubmit={handleSubmit}>
          <Navbar />
          <label for='name'>Email</label>
          <input value={name} placeholder='full name' id='name' name='name'></input>
          <label for='email'>Email</label>
          <input value={email} type="email" placeholder='youremail@gmail.com' id='email' name='email'></input>
          <label for='password'>Password</label>
          <input value={pass} type="password" placeholder='********' id='password' name='password'></input>
          <button>Login</button>
        </form>
        <Link>Already have an account? Login Here.</Link>
      </>
    )
}

export default Register