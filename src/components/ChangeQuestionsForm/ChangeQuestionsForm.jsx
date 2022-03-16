import {useState, useEffect} from 'react'
import { useForm } from "react-hook-form"
import { getQuestionApi } from '../../api/questions'
import Button from '../../utils/Button/Button'

import './ChangeQuestionsForm.scss'

export default function ChangeQuestionsForm() {
  const [dataQuestion, setDataQuestion] = useState({
    question1: "Comida favorita",
    question2: "Artista favorito",
    question3: "Lugar favorito",
    question4: "Color favorito"
  })
  console.log(dataQuestion)

  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    getQuestion()
  }, [])

  const getQuestion = async () => {
    const result = await getQuestionApi()
    if(result.ok) return setDataQuestion(result.result.result)
  }

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <form className="changeQuestions" onSubmit={handleSubmit(onSubmit)}>
      <div className='changeQuestions__inputs'>
        <section>
          <label htmlFor="q1">Pregunta 1</label>
          <input type="text" name="q1" id="q1" {...register("question1")} defaultValue={dataQuestion.question1} />
        </section>
        <section>
          <label htmlFor="q2">Pregunta 2</label>
          <input type="text" name="q2" id="q2" {...register("question2")} defaultValue={dataQuestion.question2} />
        </section>
        <section>
          <label htmlFor="q3">Pregunta 3</label>
          <input type="text" name="q3" id="q3" {...register("question3")} defaultValue={dataQuestion.question3} />
        </section>
        <section>
          <label htmlFor="q4">Pregunta 4</label>
          <input type="text" name="q4" id="q4" {...register("question4")} defaultValue={dataQuestion.question4} />
        </section>
      </div>
      <Button value="Actualizar preguntas" />
    </form>
  )
}
