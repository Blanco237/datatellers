import React from 'react'

const Input = ({ name, type, width, label }) => {

    const inputStyles = {
        width: width
    }

  return (
    <label htmlFor={name} style={inputStyles}>
        <h4>{label}</h4>
        <input type={type} name={name} style={{width: '100%'}} />
    </label>
  )
}

export default Input