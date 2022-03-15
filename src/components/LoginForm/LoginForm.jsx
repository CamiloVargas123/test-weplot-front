import { Link } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import { useForm } from 'react-hook-form'
import InputError from '../../utils/InputError/InputError'

import './LoginForm.scss'

export default function LoginForm() {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form className='loginUser' onSubmit={handleSubmit(onSubmit)}>
      <section>
        <label htmlFor="email">Email*</label>
        <input className={errors.email && 'input--error'} type="email" id='email' {...register("email", { required: true })} />
        {errors.email && <InputError />}
      </section>
      <section>
        <label htmlFor="password">Contraseña*</label>
        <input className={errors.password && 'input--error'} type="password" id='password' {...register("password", { required: true })} />
        {errors.password && <InputError />}
      </section>
      <section>
        <Button value="Acceder a Weplot" />
      </section>
      <div className='loginUser__link'>
        <span>¿No tienes cuenta?</span>
        <Link to={'/'}>Registrate aquí</Link>
      </div>
    </form>
  )
}
