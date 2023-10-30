import React from "react";
import '../App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Offer from '../components/Offer';

function Home() {
    return (
      <div className="App">
        <Nav/>
        <Hero/>
        <Offer/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  