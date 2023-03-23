import { React, useState } from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

import s from './PostCreationPage.module.scss'

import { useDispatch } from 'react-redux'

import { addPost } from '../../store/postsSlice'

function PostCreationPage() {
  const dispatch = useDispatch()

  const [postImage, setPostImage] = useState('')
  const [postTitle, setPostTitle] = useState('')
  const [postText, setPostText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(addPost({ postImage, postTitle, postText }))
  }

  return (
    <div className={s.postCreationPage}>
      <div className={s.container}>
        <div className={s.title}>Post creation</div>
        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.inputs}>
            <Input
              label="Image url"
              variant="settingsInput"
              value={postImage}
              onChange={(e) => setPostImage(e.target.value)}
            />
            <Input
              label="Title"
              variant="settingsInput"
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <Input
              label="Text"
              variant="settingsTextarea"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
          </div>
          <Button className={s.button} type="submit">
            Create
          </Button>
        </form>
      </div>
    </div>
  )
}

export default PostCreationPage
