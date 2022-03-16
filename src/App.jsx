import Router from './routes/routes'
import 'sweetalert2/src/sweetalert2.scss'
import { AuthProvider } from './provider/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
