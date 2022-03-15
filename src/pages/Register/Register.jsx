import svg from '../../asset/svg/Ellipse.svg'
import Button from '../../utils/Button/Button'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'
import RegisterUser from '../../components/RegisterUser/RegisterUser'

import './Register.scss'

export default function Register() {
  return (
    <div className='register'>
      <header>
        <img src={svg} alt="svg" className='svg-ellipse' />
        <h1>Regístrate a <b>WePlot</b></h1>
      </header>
      <div className='register__buttons'>
        <Button className='shadow bg-warning bg-opacity-25 rounded' secundary value="Registro con Google" icon={faGoogle} />
        <Button className='shadow bg-body rounded' secundary value="Registro con Facebook" icon={faFacebook} />
      </div>
      <span className='register__spamtext'>O diligencia el formulario</span>
      <form action="">
        <RegisterUser />
      </form>
    </div>
  )
}
