import React from 'react'

const Welcome = () => {
  return (
    <div className='welcome-page'>
        <div className='welcome-container'>
            <h1 className='welcome-title'>Welcome to Curate</h1>
            <div className='welcome-divider'></div>
            <br />
            <h2 className='welcome-blurb'>Curate is a personal study and review app designed to help you increase studying effiency and information retention.</h2>
            <br />
            <h2 className='welcome-blurb'>Use the button in the top right to login with your Google account!</h2>
        </div>
    </div>
  )
}

export default Welcome