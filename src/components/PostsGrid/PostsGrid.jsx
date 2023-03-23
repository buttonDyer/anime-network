import { React, useState, useEffect } from 'react'

import s from './PostsGrid.module.scss'

import PostCard from '../PostCard'

import { Link } from 'react-router-dom'

function PostsGrid() {
  const [posts, setPosts] = useState([])

  const endpoint = 'http://localhost:3001'

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${endpoint}/posts`)
      const data = await res.json()
      setPosts(data)
    }
    fetchData()
  }, [])

  return (
    <div className={s.postsGrid}>
      <div className={s.posts}>
        <div className={s.title}>Recent posts</div>
        <Link to="/create-post" className={s.link}>
          Add new post
        </Link>
        <div className={s.grid}>
          {posts.map((elem) => (
            <PostCard
              img={elem.postImage}
              title={elem.postTitle}
              text={elem.postText}
              key={elem.id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostsGrid
