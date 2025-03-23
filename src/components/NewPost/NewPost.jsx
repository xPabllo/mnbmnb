import React, { useState, useContext } from 'react'
import { ForumContext } from '../../context/ForumContext'
import styles from './NewPost.module.css'

const NewPost = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const { addPost } = useContext(ForumContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim() || !content.trim()) return

    addPost({
      title,
      content,
      author: 'Anonymous User',
      date: new Date(),
    })

    setTitle('')
    setContent('')
    setIsOpen(false)
  }

  return (
    <div className={styles.newPost}>
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)}>Create New Post</button>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Post title"
            required
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your post..."
            required
          />
          <div className={styles.buttons}>
            <button type="submit">Post</button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={styles.cancel}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default NewPost
