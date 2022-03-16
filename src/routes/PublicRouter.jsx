import { useAuth } from "../provider/AuthProvider"
import { Navigate } from "react-router-dom"

export default function PublicRouter({children}){
  const { userData } = useAuth()
  return userData ? <Navigate replace to='user' /> : children
}