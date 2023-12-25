import Post from '../post/Post'
import './posts.css'

export default function Posts({ blogs }) {
  return (
    <div className="posts">
      {blogs.map((blog) => (
        <Post key={blog.id} blog={blog}/>
      )
      )}
    </div>
  )
}