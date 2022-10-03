import React, { FunctionComponent } from 'react'
import { Location, NavigateFunction, Params, useLocation, useNavigate, useParams } from 'react-router-dom'

interface RouterProps {
  location: Location
  push: NavigateFunction
  params: Readonly<Params<string>>
}

interface PropsWithRouterProps {
  history?: RouterProps
  [key: string]: any
}

/* 高阶组件封装withRouter */
export default function withRouter(Comp: FunctionComponent<PropsWithRouterProps>) {
  function ComponentWithRouterProps(props: PropsWithRouterProps) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()

    return (
      <Comp
        {...props}
        history={{ push: navigate, location, params }}
      ></Comp>
    )
  }

  return ComponentWithRouterProps
}
