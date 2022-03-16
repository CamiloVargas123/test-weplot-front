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

  console.log(allUsers)

  return (
    <div className='admin'>
      <div>
        <ChangeQuestionsForm />
      </div>
      <>
        <table class="table table-striped">
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
                  <tr key={idx}>
                    <th>{idx + 1}</th>
                    <td className='admin__table--img'><img src={item.avatar} alt="avatar" /></td>
                    <td className='admin__table--name'>{item.fname +" "+ item.lname}</td>
                    <td>{item.email}</td>
                    <td>{item.tel}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </>
    </div>
  )
}
