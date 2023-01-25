import React from 'react'
import CardInfo from './Card'
import Followers from './Followers'
const User = () => {
  return (
    <>
      <div className='main'>
      <CardInfo/>
      <Followers/>
      </div>
    </>
  )
}

export default User