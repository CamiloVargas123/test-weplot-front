import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { getQuestionApi, updateQuestionApi } from '../../api/questions'
import Button from '../../utils/Button/Button'
import Swal from 'sweetalert2'

import './ChangeQuestionsForm.scss'

export default function ChangeQuestionsForm() {
  const [dataQuestion, setDataQuestion] = useState(null)
  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    getQuestion()
  }, [])

  const getQuestion = async () => {
    const result = await getQuestionApi()
    if (result.ok) return setDataQuestion(result.result.result)
  }

  const onSubmit = async (data) => {
    updateQuestionApi(data).then(response => {
      return Swal.fire({icon: "success", text: "Preguntas actualizadas"})
    }).catch(err => Swal.fire({icon: "warning", text: "Error, Intenta de nuevo"}))
  }

  return (
    <form className="changeQuestions" onSubmit={handleSubmit(onSubmit)}>
      <div className='changeQuestions__inputs'>
        <section>
          <label htmlFor="q1">Pregunta 1</label>
          <input type="text" name="q1" id="q1" {...register("question1")} defaultValue={dataQuestion && dataQuestion.question1} />
        </section>
        <section>
          <label htmlFor="q2">Pregunta 2</label>
          <input type="text" name="q2" id="q2" {...register("question2")} defaultValue={dataQuestion && dataQuestion.question2} />
        </section>
        <section>
          <label htmlFor="q3">Pregunta 3</label>
          <input type="text" name="q3" id="q3" {...register("question3")} defaultValue={dataQuestion && dataQuestion.question3} />
        </section>
        <section>
          <label htmlFor="q4">Pregunta 4</label>
          <input type="text" name="q4" id="q4" {...register("question4")} defaultValue={dataQuestion && dataQuestion.question4} />
        </section>
      </div>
      <Button value="Actualizar preguntas" />
    </form>
  )
}
