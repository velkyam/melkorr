import React from "react";
import '../App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Offer from '../components/Offer';
import Offer2 from '../components/Offer2';
import Getstarted from '../components/Getstarted';

function Home() {
    return (
      <div className="App">
        <Nav/>
        <Hero/>
        <Offer/>
        <Offer2/>
        <Getstarted/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;
  