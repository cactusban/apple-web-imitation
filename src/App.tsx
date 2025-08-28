import type { FC, ReactNode } from 'react'
import routes from './router/router'
import { Route, Routes } from 'react-router-dom'
import TopBar from './components/topbar'
interface Iprops {
  children?: ReactNode
}
const App: FC<Iprops> = () => {
  return (
    <div>
      <TopBar></TopBar>

      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  )
}
export default App
