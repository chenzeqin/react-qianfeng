
import React from "react"

export const myContext = React.createContext({
  info: '',
  changeInfo: (info: string) => { }
})