import React, { createContext, useState } from 'react'

export const ForumContext = createContext()

export const ForumProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Community Garden Project',
      content: 'Looking for volunteers to help start a community garden!',
      author: 'Jane Smith',
      date: new Date('2023-07-20'),
      comments: [
        {
          id: 1,
          content: 'I would love to help! I have experience with gardening.',
          author: 'John Doe',
          date: new Date('2023-07-21'),
        },
      ],
    },
    {
      id: 2,
      title: 'Neighborhood Watch Meeting',
      content: 'Monthly meeting this Saturday at 10 AM in the community center.',
      author: 'Mike Johnson',
      date: new Date('2023-07-19'),
      comments: [],
    },
  ])

  const addPost = (post) => {
    setPosts([...posts, { ...post, id: posts.length + 1, comments: [] }])
  }

  const addComment = (postId, comment) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, { ...comment, id: post.comments.length + 1 }]
        }
      }
      return post
    }))
  }

  return (
    <ForumContext.Provider value={{ posts, addPost, addComment }}>
      {children}
    </ForumContext.Provider>
  )
}
