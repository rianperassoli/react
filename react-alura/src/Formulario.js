import React, { useState } from 'react'

import FormValidator from './FormValidator'
import PopUp from './PopUp'

const formValidator = new FormValidator([
    {
        campo: 'nome',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Informe um nome'
    },
    {
        campo: 'livro',
        metodo: 'isEmpty',
        validoQuando: false,
        mensagem: 'Informe um livro'
    },
    {
        campo: 'preco',
        metodo: 'isInt',
        args: [{ min: 0, max: 9999 }],
        validoQuando: true,
        mensagem: 'Informe um valor numerico'
    }
])

const stateInicial = {
    nome: '',
    livro: '',
    preco: '',
    validacao: formValidator.valid()
}

function Formulario(props) {

    const [dados, setDados] = useState(stateInicial)

    const handlerInput = (event) => {
        const { name, value } = event.target

        setDados({ ...dados, [name]: value })
    }

    const submitForm = () => {
        const validacao = formValidator.valida(dados);

        if (validacao.isValid) {
            props.handlerSubmit(dados)
            setDados(stateInicial)
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });

            camposInvalidos.forEach(campo => PopUp.exibeMensagem('error', campo.message));
        }
    }

    return (
        <form>
            <div className='row'>

                <div className='input-field col s4'>
                    <label className='input-field' htmlFor='nome'>Autor</label>
                    <input id='nome'
                        type='text'
                        name='nome'
                        value={dados.nome}
                        onChange={handlerInput} />
                </div>

                <div className='input-field col s4'>
                    <label className='input-field' htmlFor='livro'>Livro</label>
                    <input
                        id='livro'
                        type='text'
                        name='livro'
                        value={dados.livro}
                        onChange={handlerInput} />
                </div>

                <div className='input-field col s4'>
                    <label className='input-field' htmlFor='preco'>Preço</label>
                    <input id='preco'
                        type='text'
                        name='preco'
                        value={dados.preco}
                        onChange={handlerInput} />
                </div>

            </div>

            <button className='waves-effect waves-light indigo lighten-2 btn'
                type='button'
                onClick={submitForm}
            >Salvar</button>
        </form>
    )
}

export default Formulario