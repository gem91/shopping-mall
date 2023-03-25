// import { createContext, useContext, useState, useEffect } from 'react';
import { login, logout, onUserStateChange } from "api/fisebase";

const { createContext, useContext, useState, useEffect } = require("react");
const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    // callback 함수받는 onUserStateChange
    onUserStateChange((user) => {
      setUser(user)
    })
  }, [])

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext(){
  return useContext(AuthContext);
}