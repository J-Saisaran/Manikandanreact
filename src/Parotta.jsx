import React, { useState } from 'react'

function Parotta() {
    const [parotta,setParotta]= useState(0);
    const totalparotta = () => {
        setParotta(parotta + 5)
    }
  return (
    <div>
        <h1>Soori ate {parotta} much parotta</h1>
        <button onClick={totalparotta}>Total</button>
    </div>
  )
}

export default Parotta