import { ComponentProps, useState } from 'react'
import { clsx } from 'clsx'


function Button(props: ComponentProps<'button'>) {
  const [ count, setCount ] = useState(0)
  const { children, ...prop } = props

  function handleClick(e: EventFor<'button', 'onClick'>) {
    setCount(count + 1)
    e.preventDefault()
  }

  return (
    <button className={
      clsx('text-16px p-x-10px p-y-5px border-rd-5px',
        'color1 bg-color1 border-2px border-transparent border-solid',
        'transition-colors-300 m-b-24px',
        'hover:border-color1',
        'focus-visible:outline1 outline-offset-2'
      )
    } onClick={ handleClick } { ...prop } >
      { children ?? `计数器为 ${ count }` }
    </button>
  )
}

export default Button
