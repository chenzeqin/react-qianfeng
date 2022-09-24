import React from 'react'
import { Redirect } from 'umi'
import './index.less'

export default function App() {
  return (
    <Redirect from="/" to="films"></Redirect>
  )
}
