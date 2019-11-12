import React, { Component } from 'react'

export default class Saudacao extends Component {
    state = {
        nome: this.props.nome,
        tipo: this.props.tipo,
    }

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)        
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        return (
            <div>
                <h1>{this.state.tipo} {this.state.nome}</h1>
                <hr />

                <input type="text"
                    placeholder="Tipo..."
                    value={this.state.tipo}
                    onChange={this.setTipo} />

                <input type="text"
                    placeholder="Nome..."
                    value={this.state.nome}
                    onChange={e => this.setNome(e)} />
            </div >
        )
    }
}
