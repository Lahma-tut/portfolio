import { useState } from 'react'

export const Header = () => {
  const [name, setName] = useState(true)

  const handleClick = () => {
    if (name) {
      setName(false)
    } else {
      setName(true)
    }
  }

  return (
    <header className='header'>
      <div className='logo'>
        <div className='avatar'></div>
      </div>
      <h2 onClick={handleClick}>
          {name ? 'Максим Прядкин' : 'Прядкин Максим'}
      </h2>
    </header>
  )
}