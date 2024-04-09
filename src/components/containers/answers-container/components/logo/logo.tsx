import React from 'react'
import './logo.sass'
import logo from '../../../../../assets/logo.png'

const Logo = () => {
  return (
    <div className='logo'>
      <img src={logo} alt='Millionaires Logo'/>
      <div className="logo__animation-box"/>
    </div>
  )
}

export default Logo