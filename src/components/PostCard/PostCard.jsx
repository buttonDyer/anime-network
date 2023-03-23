import { React } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import s from './PostCard.module.scss'

function PostCard({ id, img, title }) {
  const { user } = useSelector((state) => state.user)

  return (
    <Link to={`/feed/${id}`} className={s.link}>
      <div className={s.imageWrapper}>
        <img className="fill" src={img} alt="" />
        <div className={s.overlayText}>
          <div className={s.name}>{user.name ? user.name : user.email}</div>
          <div className={s.title}>{title}</div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
