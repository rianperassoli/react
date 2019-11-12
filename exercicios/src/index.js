import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Rian" sobrenome="Perassoli">
            <Filho nome="Rians" />
            <Filho nome="Joao" />
            <Filho nome="Pedro" />
        </Pai>
    </div>
    , document.getElementById('root'))