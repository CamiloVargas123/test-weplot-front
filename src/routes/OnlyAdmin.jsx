
import { useAuth } from "../provider/AuthProvider"
import { Navigate } from "react-router-dom"

export default function OnlyAdmin({children}) {
  const { userData } = useAuth()
  if(userData?.role === 'admin') return children
  return <Navigate to="/user" />
}