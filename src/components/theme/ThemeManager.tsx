import { useGlobalStore } from '@shared/stores/useGlobalStore'
import { ComponentProps, useEffect } from 'react'
import { clsx } from 'clsx'

// 切换主题
function switchTheme(isDark: boolean) {
  if (isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function ThemeManager(props: ComponentProps<'button'>) {
  const isDark = useGlobalStore(state => state.isDark)
  const setDark = useGlobalStore(state => state.setDark)

  function handleClick() {
    document.startViewTransition(() => {
      setDark(!isDark)
    })
  }

  // 主题监听器只在挂载时创建
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setDark(e.matches)
    }
    media.addEventListener('change', handleChange)
    return () => {
      media.removeEventListener('change', handleChange)
    }
  }, [ setDark ])

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
