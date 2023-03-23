import { React } from 'react'

import s from './SinglePostPage.module.scss'

import { Link } from 'react-router-dom'

function SinglePostPage() {
  return (
    <div className={s.singlePostPage}>
      {/* <div className={s.user}>
        <Link to="/profile">
          {posts.postImage && (
            <div className={s.imageWrapper}>
              <img className="fill" src={posts.postImage} alt="" />
            </div>
          )}
        </Link>
      </div> */}
      <Link to="/feed" className={s.link}>
        Feed
      </Link>
      <Link to="/friends" className={s.link}>
        Friends
      </Link>
    </div>
  )
}

export default SinglePostPage
