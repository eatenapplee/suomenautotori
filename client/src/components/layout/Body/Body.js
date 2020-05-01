import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import firstPhoto from './firstPhoto.jpg'
import secondPhoto from './secondPhoto.jpg'
import thirdPhoto from './thirdPhoto.jpg'
import './Body.css'


export class Body extends Component {
    render() {
        return (
            <div>
            <div className = "column">
                <h1 className="columnTitle">Vaihtoautot</h1>
                <p className= "firstRow">Suomen Autotori on käytettyjen ajoneuvojen ja niiden palveluihin erikoistunut yritys. Tutustu valikoimaan sivuillamme ja koeaja autot Turun liikkeessämme. Sopivan auton löydyttyä myyjämme hoitavat kaiken tarvittavan puolestasi kuten asiapaperit, rekisteröinnin ja vakuutuksen. Katso tämänhetkinen valikoima käytetyistä autoistamme tästä.

*Kaikki vaihtoautomme ovat kuntotarkastettuja ammattitaitoisen yhteistyökumppanimme toimesta.</p>
                <img className="firstPhoto" alt={''} src={firstPhoto}/>
                <a href="https://www.nettiauto.com/yritys/suomenautotori" rel="noopener noreferrer" target="_blank" className="Link" to ="/cars">Selaa Vaihtoautoja</a >
            </div>
            <div className = "column2">
                <h1 className="column2Title"> Rahoitus </h1>
                <p className= "secondRow">Pankki ja luottokorttimaksun lisäksi meiltä ostettavan auton voit vaihtoehtoisesti rahoittaa myös luotollla, ja jopa ilman käsirahaa! Sinun ei tarvitse järjestää rahoitusta etukäteen, sen sijaan myyjämme huolehtivat rahoitushakemuksen teosta suoraan liikkeessämme ja luottopäätöksen saat usemmiten samantien. Mikäli luottotietosi ovat kunnossa, voit ostaa meiltä auton ilman käsirahaa ja/tai takaajia.</p>
                <img className="secondPhoto" alt={''}  src={secondPhoto}/>

            </div>
            <div className = "column3">
                <h1 className="columnTitle">Monipuoliset pesupalvelut</h1>
                <p className= "thirdRow">Autoliikkeemme kyljessä teitä palvelee täyden palvelun autopesula, jossa työntekijämme tekevät ammattitaidolla ja laadukkaasti auton pesut, kiillotukset, vahaukset sekä auton sisäpuhdistukset.
Pesutilaamme mahtuu henkilöautojen lisäksi myös maastoautot sekä pakettiautot.</p>
                <img className="thirdPhoto" alt={''}  src={thirdPhoto}/>
                <Link className="Link" to ="/prices">Hinnasto</Link>
            </div>

            </div>
        )
    }
}

export default Body
