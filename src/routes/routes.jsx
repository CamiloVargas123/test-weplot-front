import {BrowserRouter, Route, Routes} from 'react-router-dom'

//layout
import LoginOrRegister from '../Layout/LoginOrRegister/LoginOrRegister'

//pages
import Login from '../pages/Register/Register'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginOrRegister />}>
          <Route index element={<Login />} />
          <Route path='register' element={<p>Register</p>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}