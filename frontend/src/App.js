import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import Notification from './components/Notification'
//import AddBlogForm from './components/AddBlogForm'
//import BlogList from './components/BlogList'
//import LoginForm from './components/LoginForm'
import { initializeBlogs } from './reducers/blogReducer'
import { initializeUser } from './reducers/authReducer'
//import { initializeAllUsers } from './reducers/userReducer'
//import { initializeAllComments } from './reducers/commentReducer'
//import UserDisplay from './components/UserDisplay'
//import { Nav, Navbar } from 'react-bootstrap'
//import { logout } from './reducers/authReducer'
//import EachUser from './components/EachUser'
//import EachBlog from './components/EachBlog'
import Single from './pages/singlePost/Single'
import NewPost from './pages/newPost/NewPost'
import Topbar from './components/topbar/Topbar'
import Homepage from './pages/home/Home'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { Routes, Route } from 'react-router-dom'
import { initializeCategories } from './reducers/categoryReducer'


const App = () => {
  const authUser = useSelector( state => state.auth )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeCategories())
    dispatch(initializeUser())
  }, [dispatch])
  /*
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeBlogs())
    dispatch(initializeUser())
    dispatch(initializeAllUsers())
  }, [dispatch])
  */


  /* const Home = () => {
    return (
      <div>
        <h1>Blogs App</h1>
        <AddBlogForm />
        <BlogList />
      </div>
    )
  } */

  /* const Blogs = () => {
    return (
      <div>
        <h2>Blogs</h2>
        <BlogList />
      </div>
    )
  } */

  /* const handleLogout = async (event) => {
    event.preventDefault()
    dispatch( logout() )
  } */

  /*  const match = useMatch('/blogs/:id')
  console.log('blogid', match.params.id)
  const blog = match? blogs.find(blog => blog.id === String(match.params.id)) : null

  console.log('blog', blog)

  if (!blog) {
    return null
  } */

  return (
    <div className='container'>
      <Topbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/blogs' element={<Homepage />} />
        <Route path='/blogs/:id' element={<Single />} />
        <Route path='/newPost' element={authUser? <NewPost /> : <Login />} />
        <Route path='/settings' element={authUser? <Settings /> : <Login />} />
        <Route path='/login' element={authUser? <Homepage /> : <Login />} />
        <Route path='/register' element={authUser? <Homepage /> : <Register />} />
      </Routes>
    </div>
  )
}

/*
  <Topbar />
  <notificaton />
  <Route path='/users' element={<UserDisplay />} />
  <Route path='/blogs' element={<Blogs />} />
  <Route path="/users/:id" element={<EachUser />} />
  <Route path="/blogs/:id" element={<EachBlog />} />
*/

export default App
