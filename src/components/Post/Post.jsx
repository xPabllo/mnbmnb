import React, { useState, useContext } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ForumContext } from '../../context/ForumContext'
import styles from './Post.module.css'

const Post = ({ post }) => {
  const [newComment, setNewComment] = useState('')
  const { addComment } = useContext(ForumContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    addComment(post.id, {
      content: newComment,
      author: 'Anonymous User',
      date: new Date(),
    })
    setNewComment('')
  }

  return (
    <div className={styles.post}>
      <h2>{post.title}</h2>
      <p className={styles.content}>{post.content}</p>
      <div className={styles.meta}>
        <span>Posted by {post.author}</span>
        <span>{formatDistanceToNow(post.date)} ago</span>
      </div>

      <div className={styles.comments}>
        <h3>Comments ({post.comments.length})</h3>
        {post.comments.map(comment => (
          <div key={comment.id} className={styles.comment}>
            <p>{comment.content}</p>
            <div className={styles.commentMeta}>
              <span>{comment.author}</span>
              <span>{formatDistanceToNow(comment.date)} ago</span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className={styles.commentForm}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  )
}

export default Post
