import { lazy, Suspense } from "react"

export const lazyLoad = (path: string) => {
  const Comp = lazy(() => import(`../views/${path}`))
  return (
    <Suspense fallback={<div>loading</div>}>
      <Comp></Comp>
    </Suspense>
  )
}