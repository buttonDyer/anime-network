import React from 'react'

import s from './PostCard.module.scss'

function PostCard({ img, title, text }) {
  return (
    <div className={s.card}>
      <div className={s.imageWrapper}>
        <img className="fill" src={img} alt="" />
      </div>
      <div className={s.title}>{title}</div>
      <div className={s.text}>{text}</div>
    </div>
  )
}

export default PostCard
