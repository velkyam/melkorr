import React from 'react';
import navLogo from '../components/assets/images/logo10_1.svg'
import { Link } from 'react-router-dom';

function Nav() {

    return (


         <nav className="navbar navbar-expand-lg fixed-top  bg-white">
             <div className="topNav">
                 <Link to="/" className="navbar-brand logoContainer" >
                     <img className="navLogo" src={navLogo} alt="melkor_logo" />
                
                 </Link>
                 <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="offcanvas offcanvas-end"data-bs-scroll="true" data-bs-backdrop="true" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                     <div className="offcanvas-header">
                         <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                     </div>
                     <div className="offcanvas-body">
                         <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 align-items-center">
                             <li className="nav-item">
                                 <Link className="nav-link navPage" to='/melkorvisum'>MelkorVisum</Link>
                             </li>
                             <li className="nav-item">
                                 <Link className="nav-link navPage" to="/onas">O nás</Link>
                             </li>
                             <li className="nav-item">
                                 <Link className="nav-link navPage" to='/reference'>Reference</Link>
                             </li>
                             <li className="nav-item">
                                 <Link className='nodecor' to='/kontakt'><button type="button" className="btn btn-primary btn-lg learnButton" >Kontaktujte nás</button></Link>
                             </li>
                         </ul>
                     </div>
                 </div>
             </div>
         </nav>


    );
}


export default Nav;