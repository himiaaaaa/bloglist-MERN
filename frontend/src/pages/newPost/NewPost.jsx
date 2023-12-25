import './newPost.css'

export default function NewPost() {
  return (
    <div className="newPost">
      <img
        className="newPostImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="newPostForm">
        <div className="newPostFormGroup">
          <label htmlFor="fileInput">
            <i className="newPostIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />
          <input
            className="newPostInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="newPostFormGroup">
          <textarea
            className="newPostInput newPostText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="newPostSubmit" type="submit">
            Publish
        </button>
      </form>
    </div>
  )
}