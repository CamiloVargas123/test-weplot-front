import { Link } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import { useForm } from 'react-hook-form'
import InputError from '../../utils/InputError/InputError'
import captcha from '../../asset/img/captcha.png'

import './RegisterUser.scss'

export default function RegisterUser() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className='registeruser' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <section>
          <label htmlFor="fname">Nombre*</label>
          <input className={errors.fname && 'input--error'} type="text" id='fname'{...register("fname", {required: true})} />
          {errors.fname && <InputError />}
        </section>
        <section>
          <label htmlFor="lname">Apellido</label>
          <input type="text" id='lname' {...register("lname")}  />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="email">Email*</label>
          <input className={errors.email && 'input--error'} type="email" id='email' {...register("email", {required: true})} />
          {errors.email && <InputError />}
        </section>
        <section className='registeruser__tel'>
          <label htmlFor="prefix">Telefono*</label>
          <div>
            <input className={(errors.tel || errors.prefix) && 'input--error'} type="tel" id='prefix' {...register("prefix", {required: true})} />
            <input className={(errors.tel || errors.prefix) && 'input--error'} type="tel" id='tel' {...register("tel", {required: true})} />
          </div>
          {(errors.tel || errors.prefix)  && <InputError />}
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="email">Pais</label>
          <input type="text" id='city' {...register("city")} />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="question1">Comida favorita</label>
          <input type="text" id='question1' {...register("question1")} />
        </section>
        <section>
          <label htmlFor="question2">Artista favorito</label>
          <input type="text" id='question2' {...register("question2")} />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="question3">Lugar favorito</label>
          <input type="text" id='question3' {...register("question3")} />
        </section>
        <section>
          <label htmlFor="question4">Color favorito</label>
          <input type="text" id='question4' {...register("question4")} />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="password">Contraseña*</label>
          <input className={errors.password && 'input--error'} type="password" id='password' {...register("password", {required: true})} />
          {errors.password && <InputError />}
        </section>
        <section>
          <label htmlFor="repeatPassword">Confirmar contraseña*</label>
          <input className={errors.repeatPassword && 'input--error'} type="password" id='repeatPassword' {...register("repeatPassword", {required: true})} />
          {errors.password && <InputError />}
        </section>
      </div>
      <div>
        <h2>Foto de perfil</h2>
      </div>
      <div className='registeruser__captcha'>
        <img src={captcha} alt="captcha" />
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
