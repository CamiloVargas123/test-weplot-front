import { useState, useEffect } from 'react'
import ChangeQuestionsForm from '../../components/ChangeQuestionsForm/ChangeQuestionsForm'
import { getAllUsers } from '../../api/user'

import './Admin.scss'

export default function Admin() {
  const [allUsers, setAllUsers] = useState(null)

  useEffect(() => {
    getAllUsers().then(response => {
      setAllUsers(response.result)
    })
  }, [])

  return (
    <div className='admin'>
      <div>
        <ChangeQuestionsForm />
      </div>
      {allUsers && 
      
        <table class="admin__table table table-striped">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Avatar</th>
              <th scope="col">Nombre completo</th>
              <th scope="col">Correo</th>
              <th scope="col">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {
              allUsers.map((item, idx) => {
                return (
                  <>
                    <tr key={idx}>
                      <th>{idx + 1}</th>
                      <th className='admin__table--img'><img src={item.avatar} alt="avatar" /></th>
                      <th className='admin__table--name'>{item.fname + " " + item.lname}</th>
                      <th>{item.email}</th>
                      <th>{item.tel}</th>
                    </tr>
                    <tr>
                      <th colspan="5">
                        <table class="subtable table mb-0">
                          <thead>
                            <tr>
                              <th></th>
                              {item.question.map((e, i) =>  {
                                return (
                                  <th key={i} scope="col" className='subtable--questions'>
                                    <p>Pregunta {i+1}</p>
                                    <p>{e.question}</p>
                                  </th>
                                )
                              })}
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                            <th></th>
                              {item.question.map((e, i) =>  <th key={i} scope="col">{e.answer}</th>)}
                            </tr>
                          </tbody>
                        </table>
                      </th>
                    </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>
      }
    </div>
  )
}
