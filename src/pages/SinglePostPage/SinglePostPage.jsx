import { React } from 'react'

import s from './SinglePostPage.module.scss'

import { Link } from 'react-router-dom'

function SinglePostPage() {
  return (
    <div className={s.postsGrid}>
      <div className={s.posts}>
        <div className={s.title}>Recent posts</div>
        <Link to="/create-post" className={s.link}>
          Add new post
        </Link>
        <div className={s.grid}></div>
      </div>
    </div>
  )
}

export default SinglePostPage
