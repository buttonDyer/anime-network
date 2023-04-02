import React from 'react'
import { useSelector } from 'react-redux'
import s from './SinglePostPage.module.scss'

function SinglePostPage() {
  const { posts } = useSelector((state) => state.posts)

  return (
    <div className={s.singlePostPage}>
      <img src="" alt="" />
    </div>
  )
}

export default SinglePostPage
