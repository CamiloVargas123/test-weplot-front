import { Link } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import './RegisterUser.scss'

export default function RegisterUser() {
  return (
    <form className='registeruser'>
      <div>
        <section>
          <label htmlFor="fname">Nombre*</label>
          <input type="text" id='fname' />
        </section>
        <section>
          <label htmlFor="lname">Apellido</label>
          <input type="text" id='lname' />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="email">Email*</label>
          <input type="email" id='email' />
        </section>
        <section className='registeruser__tel'>
          <label htmlFor="prefix">Telefono*</label>
          <div>
            <input type="tel" id='prefix' />
            <input type="tel" id='tel' />
          </div>
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="email">Pais</label>
          <input type="text" id='city' />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="question1">Comida favorita</label>
          <input type="text" id='question1' />
        </section>
        <section>
          <label htmlFor="question2">Artista favorito</label>
          <input type="text" id='question2' />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="question3">Lugar favorito</label>
          <input type="text" id='question3' />
        </section>
        <section>
          <label htmlFor="question4">Color favorito</label>
          <input type="text" id='question4' />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="password">Contraseña*</label>
          <input type="password" id='password' />
        </section>
        <section>
          <label htmlFor="repeatPassword">Confirmar contraseña*</label>
          <input type="password" id='repeatPassword' />
        </section>
      </div>
      <div>
        <h2>Foto de perfil</h2>
      </div>
      <div>
        Captchat
      </div>
      <div>
        <Button value="Unirme a Weplot" />
      </div>
      <div className='registeruser__link'>
        <span>¿Ya tienes cuenta?</span>
        <Link to={'login'}>Inicia sesión aquí</Link>
      </div>
    </form>
  )
}
