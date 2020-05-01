import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Carousel from './components/Carousel/carousel.js';
import Header from './components/layout/Header/Header.js';
import Navbar from './components/layout/NavBar/NavBar.js';
import Body from './components/layout/Body/Body.js';
import Footer from './components/layout/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/scrollToTop.js';


import Contact from './components/pages/contact';
import Prices from './components/pages/prices';



export class App extends Component {
  render() {
    return (
      <Router basename="/">
        <ScrollToTop/>
      <div className = "App">
        <div className = "Container">
          
          <Route path="/">
            <Header />
            <Navbar />
          </Route>

          <Route exact path="/">
            <Carousel />
            <Body />
            <Footer />
          </Route>



        <Route path = "/contact">
          <Contact />
          <Footer />
          </Route>

          <Route path = "/prices">
            <Prices />
            <Footer />
          </Route>

          </div>
        </div>
      </Router>
    )
  }
}


export default App;
