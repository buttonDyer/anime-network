import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { authUser } from '../../store/userSlice'

import s from './AuthorizationPage.module.scss'

function AuthorizationPage() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.user)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const onPasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(authUser({ email, password }))
  }

  return (
    <div className={s.AuthorizationPage}>
      <div className={s.container}>
        <form className={s.form} onSubmit={onSubmit}>
          <div className={s.inputs}>
            <label className={s.label}>
              Email address
              <input
                className={s.input}
                type="text"
                value={email}
                onChange={onEmailChange}
              />
            </label>
            <label className={s.label}>
              Password
              <input
                className={s.input}
                type="password"
                value={password}
                onChange={onPasswordChange}
              />
            </label>
          </div>
          <button type="submit" className={s.button} disabled={isLoading}>
            {isLoading ? 'Loading... ' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default AuthorizationPage
