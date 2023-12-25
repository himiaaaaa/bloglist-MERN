import { useDispatch } from 'react-redux'
import './login.css'
import { login } from '../../reducers/authReducer'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async(e) => {
    e.preventDefault()

    const username = e.target.username.value
    const password = e.target.password.value
    e.target.username.value = ''
    e.target.password.value = ''
    dispatch(login(username, password))
  }

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleLogin}>
        <label>Username</label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter your username..."
          id="username"
        />
        <label>Password</label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter your password..."
          id="password"
        />
        <button className="loginButton">Login</button>
        <button
          className="loginRegisterButton"
          type="button"
          onClick={() => navigate('/register')}
        >
            Register
        </button>
      </form>
    </div>
  )
}