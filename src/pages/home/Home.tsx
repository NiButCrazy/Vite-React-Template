import viteLogo from './assets/images/vite.svg'
import reactLogo from './assets/images/react.svg'
import heroImg from './assets/images/hero.png'
import unocssLogo from './assets/images/unocss.svg'
import routerImg from './assets/images/router.png'
import zustandImg from './assets/images/zustand.ico'
import immerImg from './assets/images/immer.ico'
import { Button } from '@components/buttons'


export default function Home() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={ heroImg } className="base" width="170" height="179" alt="" />
          <img src={ reactLogo } className="framework" alt="React logo" />
          <img src={ viteLogo } className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>解锁新世界</h1>
          <p>
            编辑 <code>src/main.tsx</code> 然后保存来测试 <code>HMR</code>
          </p>
        </div>
        <Button />
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>魔法手册</h2>
          <p>问出好奇，收获惊喜</p>
          <ul>
            <li>
              <a href="https://cn.vite.dev/" target="_blank">
                <img className="logo" src={ viteLogo } alt="" />
                探索 Vite
              </a>
            </li>
            <li>
              <a href="https://zh-hans.react.dev/" target="_blank">
                <img className="button-icon" src={ reactLogo } alt="" />
                学习 React
              </a>
            </li>
            <li>
              <a href="https://unocss.nodejs.cn" target="_blank">
                <img className="button-icon" src={ unocssLogo } alt="" />
                了解 UnoCSS
              </a>
            </li>
            <li>
              <a href="https://immerjs.github.io/immer/zh-CN/example-setstate" target="_blank">
                <img className="button-icon" src={ immerImg } alt="" />
                Immer
              </a>
            </li>
            <li>
              <a href="https://ouweiya.github.io/zustand-zh" target="_blank">
                <img className="button-icon" src={ zustandImg } alt="" />
                Zustand
              </a>
            </li>
            <li>
              <a href="https://reactrouter.remix.org.cn/home" target="_blank">
                <img className="button-icon" src={ routerImg } alt="" />
                React Router
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>想法连线中</h2>
          <p>加入 Vite 社区</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}
