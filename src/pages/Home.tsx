import Button from "../components";
import resource from "../utils/resource.ts";


const { viteLogo, reactLogo } = resource

export default function Home() {
  return (
      <>
        <div>
          <a href="https://cn.vitejs.dev/guide/" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://zh-hans.react.dev/" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <Button/>
          <p>
            编辑 <code>src/App.tsx</code> 并保存以热更新
          </p>
        </div>
        <p className="read-the-docs">
          点击图标去学习 Vite & React
        </p>
      </>
  )
}