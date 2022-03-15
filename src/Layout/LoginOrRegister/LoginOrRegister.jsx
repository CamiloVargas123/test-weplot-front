import React from 'react'
import imagen from '../../asset/img/img1.png'
import { Outlet } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import svg from '../../asset/svg/Ellipse.svg'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { useLocation } from 'react-router-dom'

import './LoginOrRegister.scss'

export default function LoginOrRegister() {
  const location = useLocation().pathname === "/login" ? true : false

  return (
    <div className="App">
      <div className='App__img'>
        <img src={imagen} alt="imagen" />
      </div>
      <div className='App__content'>
        <header>
          <img src={svg} alt="svg" className='svg-ellipse' />
          <h1>{location ? "Accede a" : "Regístrate a" }<b>WePlot</b></h1>
        </header>
        <div className='App__content__buttons'>
          <Button className='bg-warning bg-opacity-25' secundary value={location ? "Accede con Google" : "Registro con Google"} icon={faGoogle} />
          <Button className='bg-body' secundary value={location ? "Accede con Facebook": "Registro con Facebook"} icon={faFacebook} />
        </div>
        <span className='App__content__spamtext'>O diligencia el formulario</span>
        <Outlet />
      </div>
    </div>
  )
}
