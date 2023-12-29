import { useDispatch, useSelector } from 'react-redux'
import './register.css'
import { register } from '../../reducers/authReducer'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.notifications)

  const initialValues = {
    username: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        'len',
        'The username must be between 3 and 20 characters.',
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required('This field is required!'),
    email: Yup.string()
      .email('This is not a valid email.')
      .required('This field is required!'),
    password: Yup.string()
      .test(
        'len',
        'The password must be between 6 and 40 characters.',
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required('This field is required!'),
  })

  const handleRegister = (formValue) => {

    const { username, email, password } = formValue

    dispatch(register(username, email, password))

  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <Formik
        onSubmit={handleRegister}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="registerForm">
          <label htmlFor='username'>Username</label>
          <Field
            className="registerInput"
            type="text"
            placeholder="Enter your username..."
            id="username"
            name="username"
          />
          <ErrorMessage
            name="username"
            component="div"
            className="alert alert-danger"
          />

          <label>Email</label>
          <Field
            className="registerInput"
            type="text"
            placeholder="Enter your email..."
            id="email"
            name="email"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="alert alert-danger"
          />

          <label>Password</label>
          <Field
            className="registerInput"
            type="password"
            placeholder="Enter your password..."
            id="password"
            name="password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="alert alert-danger"
          />

          <button className="registerButton" type="submit">
            <span id="register-btn">Register</span>
          </button>

          <button
            className="registerLoginButton"
            type="button"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </Form>
      </Formik>
      <div>
        {notification && (
          <div>
            <div className="alert alert-danger" role="alert">
              {notification}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}