import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


export default function NavBar() {
    return (
        <nav className="TopNav">
            <Link className="LinkStyleLeft"  to="/">Etusivu</Link>
            <Link className="LinkStyleRight"  to="/contact">Ota Yhteyttä</Link>
            <a href="https://www.nettiauto.com/yritys/suomenautotori" target="_blank" rel="noopener noreferrer" className="LinkStyleLeft" to ="/cars">Vaihtoautot</a >
            <Link className="LinkStyleLeft"  to="/prices">Hinnasto</Link>
            
        </nav>
    )
}
