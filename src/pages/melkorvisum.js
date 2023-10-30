import React from "react";
import '../App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Melkorvisum from '../components/Melkorvisum';


function MelkorvisumPage() {
    return (
      <div className="App">
        <Nav/>
        <Melkorvisum/>
        <Footer/>
      </div>
    );
  }
  
  export default MelkorvisumPage;
  