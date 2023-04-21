import React from 'react'
import './Header.css'

const Header = () => {
    const currentDate = new Date();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const month = months[currentDate.getMonth()];
    const day = days[currentDate.getDay()];
    const date = `${day}, ${month} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  return (
    <div className='header'>
      <h1>Welcome! It's another beautiful day!!</h1>
      <p>Set your goals on the basis of priorities and accomplish them one at a time</p>
       <p className='date'>Date: {date}</p>
    </div>
  )
}

export default Header
