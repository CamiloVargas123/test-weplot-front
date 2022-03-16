import { useAuth } from "../provider/AuthProvider"
import { Navigate } from "react-router-dom"

export default function PrivateRouter({children}){
  const { userData } = useAuth()
  return userData ? children : <Navigate to="/login" />
}