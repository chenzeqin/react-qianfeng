import { useState } from "react"

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('token'))

  return {
    isLogin
  }
}
