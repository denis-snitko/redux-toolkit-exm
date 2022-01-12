import React from 'react'

export const SimpleInput = ({ type, name, value, handleChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        onChange={(event) => handleChange((prev) => ({
          ...prev,
          [name]: event.target.value,
        }))} />
    </>
  )
}
