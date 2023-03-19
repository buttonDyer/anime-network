import { React, useState, useEffect } from 'react'

import s from './FeedPage.module.scss'

import PostCard from '../../components/PostCard'

import { Link } from 'react-router-dom'

function FeedPage() {
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
    <div className={s.feedPage}>
      <div className={s.posts}>
        <Link to="/create-post" className={s.link}>
          Add new post
        </Link>
        <div className={s.grid}>
          {posts.map((elem) => (
            <PostCard
              img={elem.postImage}
              title={elem.postTitle}
              text={elem.postText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeedPage
