import React, { useState, useEffect } from 'react'

function Text() {
  const [ text, setText] = useState("")

  useEffect(() => {
    console.log('Component mounted!')

    return () => {
      console.log('Component unmounted!')
    }
  }, [])
  
  return (
    <div>
      <input
        onChange={(event) => {
          setText(event.currentTarget.value)
        }}
      />

      <h1>{text}</h1>
    </div>
  )
}

export default Text

