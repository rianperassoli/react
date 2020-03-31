import React from 'react'
import { Link } from 'react-router-dom'

const Header = () =>
    <nav>
        <div className="nav-wrapper indigo lighten-2">
            <Link to="/" className="brand-logo">Casa do Codigo</Link>
            <ul className="right">
                <li><Link to="/autores">Autores</Link></li>
                <li><Link to="/livros">Livors</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </div>
    </nav>

export default Header
