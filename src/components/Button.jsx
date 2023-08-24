import React from 'react'

const button = ( {bgcolor, color, size, text, borderRadius} ) => {
  return (
    <button
      type='button'
      style={{backgroundColor: bgcolor, color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}>
        {text}
    </button>
  )
}

export default button