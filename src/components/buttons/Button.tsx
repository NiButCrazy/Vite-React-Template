import { ComponentProps, useState } from 'react'


function Button(props: ComponentProps<'button'>) {
  const [ count, setCount ] = useState(0)
  const { children, ...prop } = props

  function handleClick(e: EventFor<'button', 'onClick'>) {
    setCount(count + 1)
    e.preventDefault()
  }

  return (
    <button className={
      'button1'
    } onClick={ handleClick } { ...prop } >
      { children ?? `计数器为 ${ count }` }
    </button>
  )
}

export default Button
