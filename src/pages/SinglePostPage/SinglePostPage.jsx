import React from 'react'

import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Button from '../../components/Button'

import s from './SinglePostPage.module.scss'

function SinglePostPage() {
  const { id } = useParams()

  const { posts } = useSelector((state) => state.posts)
  const { user } = useSelector((state) => state.user)

  const post = posts.find((p) => p.id === Number(id))
  console.log(post)

  return (
    <div className={s.singlePostPage}>
      <div className={s.container}>
        <div className={s.title}>{post.postTitle}</div>
        <div className={s.postInfo}>
          <div className={s.imageWrapper}>
            <img className="fill" src={post.postImage} alt={post.postTitle} />
          </div>
          <div className={s.postDescription}>{post.postText}</div>
        </div>
        <div className={s.author}>
          {user.avatar && (
            <div className={s.imageWrapper}>
              <img className="fill" src={user.avatar} alt="" />
            </div>
          )}
          <div className={s.name}>{user.name ? user.name : user.email}</div>
        </div>
        <div className={s.buttons}>
          <Button className={s.button} variant="red">
            Delete
          </Button>
          <Button className={s.button}>Edit</Button>
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage
