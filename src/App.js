import React, { useState } from 'react'

import './App.css'

export function App(props) {
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [message, setMessage] = useState('')

  function ImcCalculator(props) {
    const imcHeight = height / 100
    const imc = weight / (imcHeight * imcHeight)

    if (imc < 18.6) {
      // const result = `Você está abaixo do peso! Seu IMC: ${imc.toFixed(2)}`
      // alert(`Você está abaixo do peso! Seu IMC: ${imc.toFixed(2)}`)
      setMessage(`Você está abaixo do peso! Seu IMC: ${imc.toFixed(2)}`)
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage(`Peso ideal! Seu IMC: ${imc.toFixed(2)}`)
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage(
        `Você está levemente acima do peso! Seu IMC: ${imc.toFixed(2)}`
      )
    } else if (imc > 34.9) {
      setMessage(`Cuidado Obesidade! Seu IMC: ${imc.toFixed(2)}`)
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso (KG)"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura (CM)"
          value={height}
          onChange={e => setHeight(e.target.value)}
        />
        <button onClick={ImcCalculator}>Calcular</button>

        <h2>{message}</h2>
      </div>
    </div>
  )
}
