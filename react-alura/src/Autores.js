import React from 'react'
import Header from './Header'
import DataTable from './DataTable'

const autores = [
    { nome: 'teste 1', livro: 'livro 1', preco: 10 },
    { nome: 'teste 2', livro: 'livro 2', preco: 18 },
    { nome: 'teste 3', livro: 'livro 3', preco: 35 },
    { nome: 'teste 4', livro: 'livro 4', preco: 40 },
]

const Autores = () => {
    return (
        <>
            < Header />

            <div className='container'>
                <h1>Página de autores</h1>
                <DataTable dados={autores} titulo='Autores' colunas={['nome']} />
            </div>
        </>
    )
}


export default Autores
