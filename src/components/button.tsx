import React from 'react'
import './styles/button.scss'

interface Props {
    onClick: () => void
    caption: string
}

const Button: React.FC<Props> = ({onClick, caption}) => {
  return (
    <button onClick={onClick}>{caption}</button>
  )
}

export default Button