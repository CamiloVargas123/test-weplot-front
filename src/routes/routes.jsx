import {BrowserRouter, Route, Routes} from 'react-router-dom'

//layout
import LoginOrRegister from '../Layout/LoginOrRegister/LoginOrRegister'

//pages
import Register from '../pages/Register/Register'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginOrRegister />}>
          <Route index element={<Register />} />
          <Route path='login' element={<p>login</p>} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}