import { Outlet } from "react-router";
import '../styles/index.css'
import '../styles/App.module.less'


function App() {
  return (
    <>
      <h1  className="opacity-30">首次见面，牢大</h1>
      <Outlet />
    </>
  )
}

export default App
