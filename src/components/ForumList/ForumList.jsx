import React, { useContext } from 'react'
import { ForumContext } from '../../context/ForumContext'
import Post from '../Post/Post'
import NewPost from '../NewPost/NewPost'
import styles from './ForumList.module.css'

const ForumList = () => {
  const { posts } = useContext(ForumContext)

  return (
    <div className={styles.forumList}>
      <NewPost />
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default ForumList
