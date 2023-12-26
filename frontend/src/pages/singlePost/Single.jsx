
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import SinglePost from '../../components/singlePost/SinglePost'
import './single.css'
import { useParams } from 'react-router-dom'

export default function Single() {
  const blogs = useSelector(state => state.blogs)
  const id = useParams().id

  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  console.log('query', searchParams)

  const blog = blogs.find(b => b.id === String(id))

  if(!blog){
    return null
  }

  return (
    <div className="single">
      <SinglePost blog={blog}/>
      <Sidebar blog={blog}/>
    </div>
  )
}