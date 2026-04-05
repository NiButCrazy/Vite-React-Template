import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'


export const useGlobalStore = create<GlobalStore>()(
  immer(set => ({
      isDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
      setDark: (isDark) => {
        set(state => {state.isDark = isDark})
      }
    }
  ))
)
