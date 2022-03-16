import { Link } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import { useForm } from 'react-hook-form'
import InputError from '../../utils/InputError/InputError'
import { signInApi } from '../../api/user'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../provider/AuthProvider'

import './LoginForm.scss'

export default function LoginForm() {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const { setToken } = useAuth()

  const onSubmit = async (data) => {
    const result = await signInApi(data);

    if (result.message) return Swal.fire({icon: "error", text: result.message})
    return Swal.fire({icon: "success", text: "Acceder"}).then(() => {
      setToken(result.accessToken)
      navigate('/user')
    })
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
      <section className='loginUser__button'>
        <Button value="Acceder a Weplot" />
      </section>
      <div className='loginUser__link'>
        <span>¿No tienes cuenta?</span>
        <Link to={'/'}>Registrate aquí</Link>
      </div>
    </form>
  )
}
