import Button from "@components/button";
import s_ from '../styles/Home.module.css'
import viteLogo from '../assets/vite.svg'
import reactLogo from '../assets/react.svg'


export default function Home() {
  return (
      <>
        <div>
          <a href="https://cn.vitejs.dev/guide/" target="_blank">
            <img src={ viteLogo } className={ s_.logo } alt="Vite logo" />
          </a>
          <a href="https://zh-hans.react.dev/" target="_blank">
            <img src={ reactLogo } className={ [s_.react, s_.logo].join(' ') } alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className={ s_.card }>
          <Button/>
          <p>
            编辑 <code>src/main.tsx</code> 并保存以热更新
          </p>
        </div>
        <p className={ s_.readTheDocs }>
          点击图标去学习 Vite & React
        </p>
      </>
  )
}