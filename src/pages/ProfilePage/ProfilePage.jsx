import React from 'react'

import UserInfo from '../../components/UserInfo'

import s from './ProfilePage.module.scss'

function ProfilePage() {
  return (
    <div className={s.container}>
      <UserInfo />
    </div>
  )
}

export default ProfilePage
