import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'
import photo from '../assets/photo.png'

function Header() {
  return (
    <>
    
    <img src={logo} alt="" class="logo"/>
    
    <h1 class="title">app opener </h1>

    <h2 class="title-text">Gateway to Web 3.0</h2>

    <button type="button" class="btn">Continue</button>

    <h2 class="Description">Celebrating Our Founder's birthday</h2>

    <img src={photo} alt="" class="dandylogo"/>

    <h1 class="founder">Dr Dandy</h1>

    <h3 class="Userlogo">108 M</h3>
    <h3 class="Userlogo2">Users</h3>
       
    </>
  )
}

export default Header