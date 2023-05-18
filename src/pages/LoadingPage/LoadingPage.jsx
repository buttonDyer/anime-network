import React from 'react'

import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import s from './LoadingPage.module.scss'

function LoadingPage() {
  return (
    <div className={s.loadingComponent}>
    <div className={s.container}>
      <div className={s.spinnerWrapper}>
        <div className={s.spinner}></div>
        <div className={s.planeIcon}>
          <AutoAwesomeIcon className={s.icon} />
        </div>
      </div>
      <div className={s.textWrapper}>
        <div className={s.title}>Onii-chan, wait a few seconds. I'm almost done!</div>
      </div>
    </div>
  </div>
  )
}

export default LoadingPage