import React from 'react'
import './Header.css'

const Header = () => {
    const currentDate = new Date();
    const date = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`;
  return (
    <div className='header'>
      <h1>Welcome! It's another beautiful day!!</h1>
      <p>Set your goals on the basis of priorities and acommplish them one at a time</p>
       <p className='date'>Date: {date}</p>
    </div>
  )
}

export default Header
