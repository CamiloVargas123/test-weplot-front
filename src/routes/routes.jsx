import {BrowserRouter, Route, Routes} from 'react-router-dom'

//component
import LoginForm from '../components/LoginForm/LoginForm'
import RegisterForm from '../components/RegisterForm/RegisterForm'

//layout
import LoginOrRegister from '../Layout/LoginOrRegister/LoginOrRegister'




export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginOrRegister />}>
          <Route index element={<RegisterForm />} />
          <Route path='login' element={<LoginForm />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}