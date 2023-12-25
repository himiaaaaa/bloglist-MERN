import { Link } from 'react-router-dom'
import './post.css'

export default function Post({ blog }) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={blog.photo}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {blog.categories.map((cat) => (
            <span key={cat} className="postCat">
              <Link key={cat} className="link" to={`/blogs?cat=${cat}`}>
                {cat}
              </Link>
            </span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/blogs/${blog.id}`} className="link">
            {blog.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(blog.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">
        {blog.desc}
      </p>
    </div>
  )
}