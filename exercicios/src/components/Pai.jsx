import React, { cloneElement, Children } from 'react'

export default (props) =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>

            {
                Children.map(props.children, child => {
                    return cloneElement(child, {
                        ...props,
                        ...child.props
                    })
                })
            }


            {/* <Filho nome="Pedro" sobrenome={props.sobrenome} />

            <Filho {...props} />

            <Filho nome="teste 1" {...props} />
            <Filho {...props} nome="teste 2" /> */}
        </ul>
    </div>
