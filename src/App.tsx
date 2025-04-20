import './assets/styles/App.css'
import { Outlet } from "react-router";


function App() {
  return (
    <>
      <h1>首次见面，牢大</h1>
      <Outlet />
    </>
  )
}

export default App
