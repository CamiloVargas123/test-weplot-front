import React from 'react'
import imagen from '../../asset/img/img1.png'
import {Outlet} from 'react-router-dom'
import './LoginOrRegister.scss'

export default function LoginOrRegister() {
  return (
    <div className="App">
      <div className='App__img'>
        <img src={imagen} alt="imagen" />
      </div>
      <div className='App__form'>
        <Outlet />
      </div>
    </div>
  )
}
