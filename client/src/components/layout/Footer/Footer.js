import React, { Component } from 'react'
import './Footer.css';
import { Link } from 'react-router-dom'

export class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="Linkit">
                    <h4 className="linkitTitle">Linkit</h4>
                    <Link className="LinkStyle"  to="/">Etusivu</Link>
                    <Link className="LinkStyle"  to="/contact">Ota Yhteyttä</Link>
                    <a href="https://www.nettiauto.com/yritys/suomenautotori" rel="noopener noreferrer" target="_blank" className="LinkStyle" to ="/cars">Vaihtoautot</a >
                    <Link className="LinkStyle"  to="/prices">Autopesun Hinnasto</Link>
                </div>
                <div className="aukioloajatWrapper">
                    <h4 className="aukioloajatTitle">Aukioloajat</h4>
                    <p className="Aukioloajat">La 10-18</p>
                    <p className="Aukioloajat">Ma - Pe 10-18</p>
                    
                </div>
                
            </footer>
        )
    }
}

export default Footer
