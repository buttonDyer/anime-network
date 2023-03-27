import { React } from 'react'

import { useSelector } from 'react-redux'

import { Link, useParams } from 'react-router-dom'

import s from './PostCard.module.scss'

function PostCard({ img, title }) {
  const { user } = useSelector((state) => state.user)
  const { postId } = useParams()
  const posts = useSelector((state) => Object.values(state.posts))
  const post = posts.find((post) => post.id === postId)


  return (
    <Link to={`/feed/${post.id}`} className={s.link} key={post.id}>
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
