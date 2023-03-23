import { React, useState } from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

import s from './SettingsPage.module.scss'

import { useDispatch, useSelector } from 'react-redux'

import { logOut, updateUserData } from '../../store/userSlice'

function SettingsPage() {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.user)

  const [email, setEmail] = useState(user.email || '')
  const [avatar, setAvatar] = useState(user.avatar || '')
  const [name, setName] = useState(user.name || '')
  const [description, setDescription] = useState(user.description || '')

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(updateUserData({ email, avatar, name, description }))
  }

  const handleLogOut = (e) => {
    e.preventDefault()

    dispatch(logOut())
  }

  return (
    <div className={s.SettingsPage}>
      <div className={s.container}>
        <div className={s.title}>Settings</div>
        <form className={s.form} onSubmit={onSubmit}>
          <Input
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Save</Button>
        </form>
        <form className={s.form} onSubmit={onSubmit}>
          <Input
            label="Avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
          <Button type="submit">Save</Button>
        </form>
        <form className={s.form} onSubmit={onSubmit}>
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit">Save</Button>
        </form>
        <form className={s.form} onSubmit={onSubmit}>
          <Input
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit">Save</Button>
        </form>
        <Button className={s.button} variant="red" onClick={handleLogOut}>
          Log out
        </Button>
      </div>
    </div>
  )
}

export default SettingsPage
