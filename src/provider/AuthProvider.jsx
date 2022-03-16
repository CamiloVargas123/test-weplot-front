import { useState, useEffect, createContext, useContext } from "react";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext)
}


export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(false);

  const logOut = () => {
    setUser(null)
  }

  useEffect(() => {
    if(token) return setUser(jwtDecode(token))
  }, [token]);

  const value = {
    user,
    setToken,
    logOut
  }

  return <AuthContext.Provider value={value} >{children}</AuthContext.Provider>
}
