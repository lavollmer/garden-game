import React from 'react'
import Logo from '../assets/logo.svg'

const header = () => {
  return (
    <div>
        <h1>
            <img src={Logo} alt="Logo" />
        </h1>
    </div>
  )
}

export default header