import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {login}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleLogin=()=>{
    login("Dhurshitha"); //set User
    navigate("/dashboard"); //redirect to the dashboard
  }
  return (
    <div>
        <h3>Login Page</h3>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login