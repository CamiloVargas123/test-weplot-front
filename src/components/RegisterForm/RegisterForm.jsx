import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../utils/Button/Button'
import { useForm } from 'react-hook-form'
import InputError from '../../utils/InputError/InputError'
import captcha from '../../asset/img/captcha.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload, faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { signUpApi } from '../../api/user'
import Swal from 'sweetalert2'
import { formatData } from '../../utils/formatDataRegister'
import { getQuestionApi } from '../../api/questions'
import { useNavigate } from 'react-router-dom'

import './RegisterForm.scss'

export default function RegisterUser() {
  const [isLoading, setIsLoading] = useState(false)
  const [dataQuestion, setDataQuestion] = useState({
    question1: "Comida favorita",
    question2: "Artista favorito",
    question3: "Lugar favorito",
    question4: "Color favorito"
  })
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setIsLoading(true)
    const result = await signUpApi(await formatData(data, dataQuestion))
    if (!result.ok) return Swal.fire({ title: result.message, icon: "error" }), setIsLoading(false)
    return Swal.fire({ title: result.message, icon: "success" }).then(() => {
      setIsLoading(false)
      navigate('/user')
    })
  }

  useEffect(() => {
    getQuestion()
  }, [])

  const getQuestion = async () => {
    const result = await getQuestionApi()
    if(result.ok) return setDataQuestion(result.result.result)
  }

  return (
    <form className='registeruser' onSubmit={handleSubmit(onSubmit)}>
      <div>
        <section>
          <label htmlFor="fname">Nombre*</label>
          <input className={errors.fname && 'input--error'} type="text" id='fname'{...register("fname", { required: true })} />
          {errors.fname && <InputError />}
        </section>
        <section>
          <label htmlFor="lname">Apellido</label>
          <input type="text" id='lname' {...register("lname")} />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="email">Email*</label>
          <input className={errors.email && 'input--error'} type="email" id='email' {...register("email", {
            required: true, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            },
            setValueAs: e => e.toLowerCase()
          })} />
          {errors.email && <InputError />}
        </section>
        <section className='registeruser__tel'>
          <label htmlFor="prefix">Telefono*</label>
          <div>
            <input className={(errors.tel || errors.prefix) && 'input--error'} type="tel" id='prefix' {...register("prefix", { required: true })} />
            <input className={(errors.tel || errors.prefix) && 'input--error'} type="tel" id='tel' {...register("tel", { required: true })} />
          </div>
          {(errors.tel || errors.prefix) && <InputError />}
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
          <label htmlFor="question1">{dataQuestion && dataQuestion.question1}</label>
          <input type="text" id='question1' {...register("question1")} />
        </section>
        <section>
          <label htmlFor="question2">{dataQuestion && dataQuestion.question2}</label>
          <input type="text" id='question2' {...register("question2")} />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="question3">{dataQuestion && dataQuestion.question3}</label>
          <input type="text" id='question3' {...register("question3")} />
        </section>
        <section>
          <label htmlFor="question4">{dataQuestion && dataQuestion.question4}</label>
          <input type="text" id='question4' {...register("question4")} />
        </section>
      </div>
      <div>
        <section>
          <label htmlFor="password">Contraseña*</label>
          <input className={errors.password && 'input--error'} type="password" id='password' {...register("password", { required: true })} />
          {errors.password && <InputError />}
        </section>
        <section>
          <label htmlFor="repeatPassword">Confirmar contraseña*</label>
          <input className={errors.repeatPassword && 'input--error'} type="password" id='repeatPassword' {...register("repeatPassword", { required: true })} />
          {errors.password && <InputError />}
        </section>
      </div>
      <div className='registeruser__avatar'>
        <input type="file" id='avatar' {...register("avatar")} />
        <label className='registeruser__avatar--icon' htmlFor="avatar">
          <div>
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
        </label>
        <label className='registeruser__avatar--info' htmlFor="avatar">
          <div>
            <p>Foto de perfil</p>
            <FontAwesomeIcon icon={faUpload} />
          </div>
          <span>jpg o PDF de máximo 10 MB</span>
        </label>
      </div>
      <div className='registeruser__captcha'>
        <img src={captcha} alt="captcha" />
      </div>
      <div>
        <Button value="Unirme a Weplot" disable={isLoading} />
      </div>
      <div className='registeruser__link'>
        <span>¿Ya tienes cuenta?</span>
        <Link to={'login'}>Inicia sesión aquí</Link>
      </div>
    </form>
  )
}
