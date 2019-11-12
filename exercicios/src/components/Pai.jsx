import React from 'react'
import { childrenWithProps } from '../utils/utils'


export default (props) =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}

            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />

            <Filho {...props} />

            <Filho nome="teste 1" {...props} />
            <Filho {...props} nome="teste 2" /> */}
        </ul>
    </div>

