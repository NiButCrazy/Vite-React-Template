import { Outlet } from "react-router";
import s_ from '../styles/App.module.less'


function App() {

  return (
    <>
      <h1 className={ s_.title }>首次见面，牢大</h1>
      <Outlet />
    </>
  )
}

export default App
