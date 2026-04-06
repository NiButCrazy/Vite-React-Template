import { create } from 'zustand'


export const useGlobalStore = create<GlobalStore>()(
  set => ({
    isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
    setDark: (isDark) => set(() => ({ isDark }))
  })
)
