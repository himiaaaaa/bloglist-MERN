import { useDispatch } from 'react-redux'
import './register.css'
import { useState } from 'react'
import { register } from '../../reducers/authReducer'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async(e) => {
    e.preventDefault()
    dispatch(register(username, email, password))
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleRegister}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
        <button
          className="registerLoginButton"
          type="button"
          onClick={() => navigate('/login')}
        >
            Login
        </button>
      </form>
    </div>
  )
}