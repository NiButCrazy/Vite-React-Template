import { useGlobalStore } from '@shared/stores/useGlobalStore'
import { ComponentProps, useEffect, useEffectEvent } from 'react'
import { clsx } from 'clsx'

// 切换主题
function switchTheme(isDark: boolean) {
  // .light 类名是为了防止默认过渡被覆盖，进而导致样式冲突，吞掉动画
  if (isDark) {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
}

export function ThemeManager(props: ComponentProps<'button'>) {
  const isDark = useGlobalStore(state => state.isDark)
  const setDark = useGlobalStore(state => state.setDark)

  function handleClick() {document.startViewTransition(() => {setDark(!isDark)})}

  const handleThemeChange = useEffectEvent((e: MediaQueryListEvent) => {
    setDark(e.matches)
  })

  // 主题监听器只在挂载时创建
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', handleThemeChange)
    return () => {
      media.removeEventListener('change', handleThemeChange)
    }
  }, [])

  // 每次 isDark 状态更新时触发主题切换
  useEffect(() => {
    switchTheme(isDark)
  }, [ isDark ])

  return (
    <button className={ clsx(
      'button1 pos-fixed top-30px right-30px bg-transparent'
    ) } onClick={ handleClick } { ...props } >{ isDark ? '深色' : '浅色' }主题</button>
  )
}
