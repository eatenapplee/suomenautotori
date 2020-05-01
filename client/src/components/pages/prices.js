import React, { Component } from 'react'
import Hinnasto from './hinnasto.png'
import './prices.css'
import ModalImage from 'react-modal-image'
import {Helmet} from 'react-helmet'

export class prices extends Component {

    render() {
        return (
            <div className="row">
                <Helmet>
                    <meta name="description" content="Suomen Autotori - Ota yhteyttä sivulta löydät yhteystiedot ja liikkeen osoitteen. Tervetuloa !" />
                    <meta name="keywords" content="vaihtoauto, vaihtoautot, suomen autotori, autotori, auto, turku, suomi, pesu, autopesu, turku autopesu, halvat autot, rahoitus, autorahoitus" />
                </Helmet>
                
                <div className="column">
                <h1 className="hinnastoTitle">Hinnasto</h1>
                <p className="hinnastoContent">Pesemme ja vahaamme autosi kilpailukykyiseen hintaan laadusta tinkimättä. 
Työntekijämme tekevät laadukasta jälkeä ja takaavat hyvin viimeistellyn lopputuloksen autollesi. Tutustu alla olevaan hinnastoon ja tule käymään liikkeessämme autosi kanssa!</p>

                <div style={{paddingBottom:'10%'}}> 
                <ModalImage className ="hinnastoModal"
                    small={Hinnasto}
                    large={Hinnasto}
                />

                 </div>

                </div>
            </div>
        )
    }
}

export default prices

//<img className="hinnasto" src={Hinnasto}/>
/*                  <ModalImage className="hinnasto"
                    small={Hinnasto}
                    large={Hinnasto}
                    /> */