import React from "react";
import '../App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Contact from '../components/ContactForm';


function ContactPage() {
    return (
      <div className="App">
        <Nav/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
  
  export default ContactPage;
  