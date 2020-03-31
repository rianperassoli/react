import React from 'react'

const Header = () =>
    <nav>
        <div className="nav-wrapper indigo lighten-2">
            <a href="/" className="brand-logo">Casa do Codigo</a>
            <ul className="right">
                <li><a href="/autores">Autores</a></li>
                <li><a href="/livros">Livors</a></li>
                <li><a href="/sobre">Sobre</a></li>
            </ul>
        </div>
    </nav>

export default Header
