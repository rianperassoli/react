import React, { Component } from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Autor</th>
                <th>Livro</th>
                <th>Preço</th>
                <th>Ação</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const linhas = props.autores.map(
        (linha, index) => {
            return (
                <tr key={index}>
                    <td>{linha.nome}</td>
                    <td>{linha.livro}</td>
                    <td>{linha.preco}</td>
                    <td>
                        <button className='waves-effect waves-light indigo lighten-2 btn'
                            onClick={() => props.removeAutor(index)}>Remover
                    </button>
                    </td>
                </tr>
            )
        }
    )

    return (
        <tbody>
            {linhas}
        </tbody>
    )
}

class Tabela extends Component {
    render() {
        const { autores, removeAutor } = this.props

        return (
            <table className='centered highlight'>
                <TableHeader />
                <TableBody autores={autores} removeAutor={removeAutor} />
            </table>
        )
    }
}

export default Tabela
