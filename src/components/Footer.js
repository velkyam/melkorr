import React from 'react';
import navLogo from '../components/assets/images/logo13.svg'
import { Link } from 'react-router-dom';

function Footer() {


    return (
        <div className='footer '>
            <div className='footerColumn widthContainer'>
                <div className='footerContainer'>
                    <div className='infoContainer'>
               

                         <ul className='footerLeft'>

<li>Melkor Software, s.r.o.</li>
<li><a className="learnLink" href="mailto:info@melkor.cz">info@melkor.cz</a></li>
<li>Hlaváčova 618/28<br/>614 00 Brno</li>
</ul>
                    <ul className="footerRight">
                             <li className="footerLink">
                                 <Link className="nav-link navPage" to='/'>Hlavní stránka</Link>
                             </li>
                             <li className="footerLink">
                                 <Link className="nav-link navPage" to='/melkorvisum'>MelkorVisum</Link>
                             </li>
                             <li className="footerLink">
                                 <Link className="nav-link navPage footerLink" to="/onas">O nás</Link>
                             </li>
                             <li className="footerLink">
                                 <Link className="nav-link navPage" to='/reference'>Reference</Link>
                             </li>
                             <li className="footerLink">
                                 <Link className="nav-link navPage"  to='/kontakt'>Kontaktujte nás</Link>
                             </li>
                         </ul>

                    <Link className="navbar-brand logoContainer" to="/">
                        <img className="footLogo navLogo" src={navLogo} alt="melkor_logo" />
                        
                    </Link>
                </div>
                
                </div>
                <div className='copyright'>Copyright © 2023 Melkor Software. Všechna práva vyhrazena.</div>
            </div>
        </div>
    );
}


export default Footer;