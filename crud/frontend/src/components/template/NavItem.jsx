import './NavItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <Link to={props.link} className="menu-item">
        <i className={`fa fa-${props.icon}`}></i> {props.label}
    </Link>