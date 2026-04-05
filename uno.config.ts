import { defineConfig, presetMini } from 'unocss'
import { clsx } from 'clsx'


export default defineConfig({
  // ...UnoCSS 设置
  shortcuts: {
    'button1': clsx('text-16px p-x-10px p-y-5px border-rd-5px',
      'color1 bg-color1 border-2px border-transparent border-solid',
      'transition-colors-300 m-b-24px',
      'hover:border-color1',
      'focus-visible:outline1 outline-offset-2'
    ),
  },
  rules: [
    [ 'color1', { color: 'var(--accent)' } ],
    [ 'bg-color1', { background: 'var(--accent-bg)' } ],
    [ 'border-color1', { 'border-color': 'var(--accent-border)' } ],
    [ 'outline1', { outline: '2px solid var(--accent)' } ],
  ],
  presets: [
    presetMini({
      preflight: 'on-demand',
    }),
  ],
})
