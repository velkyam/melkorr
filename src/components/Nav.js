import React from 'react';
import navLogo from '../components/assets/images/logo6.png'

function Nav() {

    return (


<nav class="navbar navbar-expand-lg fixed-top  bg-white">
    <div class="topNav">
        <a class="navbar-brand logoContainer" href="#">
            <img className="navLogo" src={navLogo} alt="melkor_logo"/>
            <h1 class="logoTitle">Melkor</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 align-items-center">
                <li class="nav-item">
                    <a class="nav-link navPage" href="#">O Nás</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link navPage" href="#">MelkorVisum</a>
                </li>
                <li class="nav-item">
                        <button type="button" class="btn btn-primary btn-lg learnButton">Kontaktujte Nás</button>
                </li>
                </ul>
            </div>
        </div>
    </div>  
</nav>    

  
              
        
    );
    }

    
    export default Nav;