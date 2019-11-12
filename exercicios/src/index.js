import React from 'react'
import ReactDOM from 'react-dom'
import { BoaTarde, BoaNoite } from './components/Multiplos'

ReactDOM.render(
    <>
        <BoaTarde nome="Rian" />
        <BoaNoite nome="Teste" />
    </>
, document.getElementById('root'))