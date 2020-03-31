import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css'
import Header from './Header'
import Tabela from './Tabela'
import Formulario from './Formulario'
import PopUp from './PopUp';



function App() {
  const [autores, setAutores] = useState([
    { nome: 'teste 1', livro: 'livro 1', preco: 10 },
    { nome: 'teste 2', livro: 'livro 2', preco: 18 },
    { nome: 'teste 3', livro: 'livro 3', preco: 35 },
    { nome: 'teste 4', livro: 'livro 4', preco: 40 },
  ])


  const removeAutor = (index) => {
    const listaAutores = autores.filter((autor, posAtual) => {
      return posAtual !== index
    })

    setAutores(listaAutores)
    PopUp.exibeMensagem('error', 'Autor removido com sucesso')
  }


  const handlerSubmit = (autor) => {
    setAutores([...autores, autor])
    PopUp.exibeMensagem('success', 'Autor adicionado com sucesso')
  }

  return (
    <>
      <Header />

      <div className='container mb-10'>
        <Tabela autores={autores} removeAutor={removeAutor} />

        <Formulario handlerSubmit={handlerSubmit} />
      </div>
    </>
  );
}

export default App;
