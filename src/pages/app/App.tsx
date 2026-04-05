import { Outlet } from 'react-router'
import { ThemeManager } from '@components/theme/ThemeManager.tsx'


function App() {
  return (
    <>
      <Outlet />
      <ThemeManager />
      <h2 className="op-30">首次见面，牢大</h2>
    </>
  )
}

export default App
