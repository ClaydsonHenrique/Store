import React from 'react'

export default function Input({ label, type, name, error, onChange, onBlur }) {

  return (
    <section>
      <label htmlFor={name}>{label}</label>
      <input
       type={type} 
       name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        />
      {error && <p>{error}</p>}
    </section>
  )
}
