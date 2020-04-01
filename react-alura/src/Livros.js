import React from 'react'
import Header from './Header'
import DataTable from './DataTable'

const livros = [
    { nome: 'teste 1', livro: 'livro 1', preco: 10 },
    { nome: 'teste 2', livro: 'livro 2', preco: 18 },
    { nome: 'teste 3', livro: 'livro 3', preco: 35 },
    { nome: 'teste 4', livro: 'livro 4', preco: 40 },
]

const Livros = () => {
    return (
        <>
            < Header />

            <div className='container'>
                <h1>Página de livros</h1>
                <DataTable dados={livros} titulo='Livros' colunas={['livro']} />
            </div>
        </>
    )
}


export default Livros