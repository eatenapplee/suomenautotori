import React, { Component } from 'react'
import './contact.css'
import FreeMap from '../map/freeMap.js'
import {Helmet} from 'react-helmet'

export class contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                <meta name="description" content="Suomen Autotori - Autopalvelujen hinnastosivulta löydät palveluerittelyn ja hinnaston. Tervetuloa !" />
                <meta name="keywords" content="vaihtoauto, vaihtoautot, suomen autotori, autotori, auto, turku, suomi, pesu, autopesu, turku autopesu, halvat autot, rahoitus, autorahoitus" />
                </Helmet>
                <div className = "row" style={{height:'100%'}}>
                    <div className="column">
                        <h1 className="otaYhteytta">Ota Yhteyttä</h1>
                        <p className= "firstRowContact">Tervetuloa käymään Suomenautotorin konttorilla. Meiltä löytyy monipuolinen vaihtoautovalikoima ja paljon erilaisia pesupalveluja. Hinnastot- sivulta löydät palveluerittelyn ja hinnaston. Meihin saat myös yhteyttä puhelimitse tai sähköpostin välityksellä. <br/><br/> Ota rohkeasti yhteyttä ja kysy lisää palveluistamme!</p>
                        <h2 className="yhteystiedot">Yhteystiedot</h2>
                        <a href="tel:0504145154" className="phoneNumber">puh. 050 414 5154 </a>
                        <p className="mail">myynti@suomenautotori.fi</p>
                        <p className="Address">Vajossuonkatu 2, 20360 Turku</p>
                        <h2 className="aukioloajat">Aukioloajat</h2>
                        <p className="aukioloajatContent">Ma - Pe 10-18<br /> La 10-18 <br/> Su suljettu </p>
                        <div className= "mapPosition">
                            <FreeMap />
                        </div>
                        

                    </div>
                    </div>

            </React.Fragment>
        )
    }
}

export default contact
