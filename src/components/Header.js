import React from 'react'
import { Link } from 'react-router-dom';

export default function header(props) {
    return (
        <header style={headerStyle}>
            <h1>ToDo</h1>
            <Link to="/" style={linkStyle} >Home</Link> | <Link to="/about" style={linkStyle} >About</Link>
        </header>
    )
}

const headerStyle = {
    color: '#fff',
    background: '#333',
    padding: '4px',
    textAlign: 'center'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}