import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './carousel.css'
import Popup from "reactjs-popup"
import { Alert, Button, Form, FormGroup, CustomInput, Input } from 'reactstrap'
import Expire from '../expire.js'
import axios from 'axios'


import carModels from "./carModels"
import slide1Photo from "./slide1Photo.jpg"
import slide2Photo from "./slide2Photo.jpg"

export class carousel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      carMake: '',
      closedWithSubmit: false,
      isFormNull: false,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      emailIsCorrect: false,
      carModel: '',
      carYear: '',
      carEngine: '',
      carValidation: '',
      carMileage: '',
      carInfo: '',
      formComplete: false,
      customFile: null,
      returnFormError: false




    }
  }

  handleInputChange = async ({target}) => {
    var value = target.value
    await this.setState({ [target.name]: value });
    console.log(this.state.carModel)
    if(this.state.email.includes("@") === true) {
      this.setState({emailIsCorrect: this.setState.emailIsCorrect = true})
    }
    if(this.state.emailIsCorrect === true && this.state.firstName !== '' && this.state.carModel !== '' && this.state.carYear !== '' && this.state.carEngine !== '' && this.state.carValidation !== '' && this.state.carMileage !== '')  {
        this.setState({formComplete: this.setState.formComplete = true})
    }
  }


  handleChange = (event) => {
    this.setState({carMake: event.target.value });
    console.log(this.state.carMake)
  };


  handleFileChange = (event) => {
    this.setState({customFile: event.target.files})
    console.log(this.state.customFile)
  }


  handleClickSubmit = (event) => {

    const form = new FormData();
    form.append('carMake', this.state.carMake);
    form.append('firstName', this.state.firstName);
    form.append('lastName', this.state.lastName);
    form.append('email', this.state.email);
    form.append('phoneNumber', this.state.phoneNumber);
    form.append('carModel', this.state.carModel);
    form.append('carYear', this.state.carYear);
    form.append('carEngine', this.state.carEngine);
    form.append('carValidation', this.state.carValidation);
    form.append('carMileage', this.state.carMileage);
    form.append('carInfo', this.state.carInfo);

    for (let i = 0; i < this.state.customFile.length; i++) {
      form.append('file', this.state.customFile[i]);
      
    }
    
    console.log(this.state)




    this.setState({closedWithSubmit: true})

      axios.post('http://suomenautotori.fi:60000/submitform/', form)
      .then(res=> {
          console.log(res);
          
      })

  }

  yearLoop = () => {
    let years = [];
    for (let i = 2020; i >= 1970; i--) {
      years.push(<option key={i}>{i}</option>)
      
    }
    return years;
  }

  successfulAlert = () => {
    let alert = [];
    alert.push(<Expire delay={3000}>
    <div>
      <Alert className="alert">
        <h4 style={{padding:'10px'}}>Lomakkeesi on vastaanotettu!</h4>
      </Alert>
    </div></Expire>)

    if(this.state.closedWithSubmit === true) {
      return alert;
    }
  }

  formError = () => {
    let error = <p className="submitError">Ole hyvä ja täytä tarvittavat tiedot</p>
    if(this.state.returnFormError === true) {
      return error
    }
  }
  


  render() {


    return (
      <div className="wrapper">
          <div className ="carouselColumn">
              <h2 className="carouselColumnTitle">Ostamme Autosi</h2>
              <p className="carouselColumnContent">Haluatko muuttaa nykyisen autosi rahaan, ja tietää paljonko maksaisimme siitä? Auton myynti on meille helppoa ja vaivatonta, ota meihin yhteyttä ostohinta-arvio -lomakkeen kautta, ja myyjämme ovat teihin yhteydessä mahdollisimman pian. </p>
              <Popup trigger={<button className="formTrigger">Täytä lomake</button>} modal>
                {close => (
                <div className="modalWrapper">
                <div className="modalHeader">Hyvitysarviolomake</div>
                <Form>
                  <FormGroup style ={{paddingBottom:'1%'}}>
                    <h4 style={{padding:'5%', paddingLeft:'0', marginLeft:'2%'}}>Ole hyvä ja täytä yhteystietosi.</h4>
                    <Input onInput={this.handleInputChange} className="inputName" type="firstname" name="firstName" id="firstName" placeholder="Etunimi" />
                    <Input onInput={this.handleInputChange} className="inputName" type="lastname" name="lastName" id="lastName" placeholder="Sukunimi" />
                   </FormGroup>
                   <FormGroup>
                    <Input onInput={this.handleInputChange} className="inputEmail" type="email" name="email" id="Email" placeholder="Sähköpostiosoite e.g 'esi@merkki.fi' " />
                    <Input onInput={this.handleInputChange} className="inputNumber" type="phonenumber" name="phoneNumber" id="phoneNumber" placeholder="Puhelinnumero (valinnainen)" />
                   </FormGroup>
                   <FormGroup>
                   <Input className="inputBrand" type="select" name="carbrand" id="carBrand" onChange={this.handleChange}>
                     <option>Valitse merkki</option>
                     {carModels.map((carBrand, index) => {
                       return <option key={index}>{carBrand.brand}</option>
                     })}
                  </Input>
                  <Input onChange={this.handleInputChange} className="inputBrand" type="select" name="carModel" id="carModel">
                     <option>Valitse malli</option>
                     {carModels.map((carBrand, index) => {
                       if(carBrand.brand === this.state.carMake) {
                       return carBrand.models.map((brandModels, index) => {
                          return <option key={index}>{brandModels}</option>
                       })
                    }})}
                  </Input>
                  <Input onInput={this.handleInputChange} className="inputBrand" type="select" name="carYear" id="carYear">
                    <option>Valmistusvuosi</option>
                    {this.yearLoop()}

                  </Input>
                  <Input onInput={this.handleInputChange} className="inputNumber" type="input" name="carEngine" id="carEngine" placeholder="Moottorin tilavuus e.g 2.5l">
                    
                  </Input >
                  <Input onInput={this.handleInputChange} className="inputName" type="input" name="carValidation" id="carValidation" placeholder="Viimeksi katsastettu (pp.kk.vvvv)">
                  
                  </Input>
                  <Input onInput={this.handleInputChange} style={{margin:'1.5%'}} className="inputNumber" type="input" name="carMileage" id="carMileage" placeholder="Mittarilukema">

                  </Input>
                  <CustomInput multiple onChange={this.handleFileChange} className="inputFile" type="file" id="FileBrowser" name="customFile" label="Lataa kuvia autostasi (valinnainen)"/>
                  <Input onInput={this.handleInputChange} className="inputInfo" type="textarea" name="info" id="info" placeholder="Lisätietoja autosta (Kunto, huollot, erikoisvarusteet jne.)" />
                  <Button type="button" onClick={() => {if(this.state.formComplete === true) {this.handleClickSubmit(); close(); setTimeout(() => { this.setState({ formComplete: false, closedWithSubmit: false  }) }, 2000);} else {this.setState({returnFormError: true}, () => setTimeout(() => {this.setState({returnFormError: false}) }, 10000) ); }}} className="submit">Lähetä</Button>
                  {this.formError()}
                   </FormGroup>
                </Form>
                </div>
              )}
              </Popup>
                  <div>{this.successfulAlert()}</div>
              <h2 className="carouselColumnTitle">Puhdas auto tänään</h2>
              <p className="carouselColumnContent">If you got the time, we got the shine ! Suomen Autotorin palveluihin kuuluu kaiken muotoisten autojen pesut ja vahaukset, katso "Hinnasto" sivusta palveluerittely ja hinnasto. Tervetuloa käymään !</p>
          </div>
        <Carousel className="carouselStyle" transitionTime={500} showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} stopOnHover={false} >
          <div style={{height:'100%'}}>
            <img className="slidePhoto" alt={''} src={slide1Photo}/>
          </div>
          <div style={{height:'100%'}}>
            <img className="slidePhoto" alt={''} src={slide2Photo}/>
          </div>


        </Carousel>
        </div>

    )
  }
}

export default carousel


// <p style={{opacity:'0.5', margin:'1%'}}>Mitä tarkemmat tiedot autostasi kerrot meille oheisen lomakkeen avulla, sitä tarkemman tarjouksen voimme sinulle tarjota.</p>