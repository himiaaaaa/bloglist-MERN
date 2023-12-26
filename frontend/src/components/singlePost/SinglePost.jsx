import { Link } from 'react-router-dom'
import './singlePost.css'

export default function SinglePost({ blog }) {
  const isPhotoUrl = blog.photo.startsWith('http')

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {isPhotoUrl ? (
          <img className="singlePostImg" src={blog.photo} alt="" />
        ) : (
          <img className="singlePostImg" src={`../upload/${blog.photo}`} alt="" />
        )}
        <h1 className="singlePostTitle">
          {blog.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/blogs?username=${blog.user.username}`}>
                {blog.user.username}
              </Link>
            </b>
          </span>
          <span>{new Date(blog.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {blog.desc}
        </p>
      </div>
    </div>
  )
}