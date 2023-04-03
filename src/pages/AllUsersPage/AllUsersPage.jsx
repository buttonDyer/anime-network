import { React } from 'react'

import UsersContainer from '../../components/UsersContainer'

import s from './AllUsersPage.module.scss'

function AllUsersPage() {
  return (
    <UsersContainer isFriends={false}>
      <div className={s.allUsersPage}>
        <div className={s.container}>All users page</div>
      </div>
    </UsersContainer>
  )
}

export default AllUsersPage
