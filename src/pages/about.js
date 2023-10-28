import React from "react";
import '../App.css';
import Nav from '../components/Nav';
import About from '../components/About';
import Footer from '../components/Footer';


function AboutPage() {
    return (
      <div className="App">
      <Nav/>
      <About/>
      <Footer/>
      </div>
    );
  }
  
  export default AboutPage;
  