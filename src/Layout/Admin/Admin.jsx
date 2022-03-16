import ChangeQuestionsForm from '../../components/ChangeQuestionsForm/ChangeQuestionsForm'

import './Admin.scss'

export default function Admin() {
  return (
    <div className='admin'>
      <div className='admin__form'>
        <ChangeQuestionsForm />
      </div>
    </div>
  )
}
