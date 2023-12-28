import './newPost.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBlog } from '../../reducers/blogReducer'
import { setNotification } from '../../reducers/notificationReducer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function NewPost() {
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const [file, setFile] = useState(null)

  const notification = useSelector((state) => state.notifications)
  const authUser = useSelector((state) => state.auth)

  const upload = async () => {
    try {
      const formData = new FormData()
      formData.append('file', file)
      const res = await axios.post('/api/upload', formData)
      return res.data
    } catch (err) {
      console.log(err)
    }
  }

  const handleNewBlog = async (e) => {

    e.preventDefault()

    const title = e.target.title.value
    const desc = e.target.desc.value
    const imgUrl = await upload()
    console.log('urlurlimgurl', imgUrl)

    e.target.title.value = ''
    e.target.desc.value = ''

    const createdBlog = {
      title: title,
      desc: desc,
      photo: file ? imgUrl : '',
    }

    dispatch(createBlog(createdBlog))
    dispatch(setNotification(`a new blog ${title} by ${authUser.username} added`, 5))
    navigate('/')
    window.location.reload()
  }

  return (
    <div className="newPost">
      {file && <img
        className="newPostImg"
        src={URL.createObjectURL(file)}
        alt=""
      />}
      <div>
        {notification && (
          <div>
            <div className="alert alert-danger" role="alert">
              {notification}
            </div>
          </div>
        )}
      </div>
      <form className="newPostForm" onSubmit={handleNewBlog}>

        <div className="newPostFormGroup">

          <label htmlFor="fileInput">
            <i className="newPostIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: 'none' }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <input
            className="newPostInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            id="title"
          />
        </div>

        <div className="newPostFormGroup">
          <textarea
            className="newPostInput newPostText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            id="desc"
          />
        </div>

        <button className="newPostSubmit" type="submit">
            Publish
        </button>

      </form>
    </div>
  )
}