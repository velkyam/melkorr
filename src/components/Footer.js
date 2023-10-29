import React from 'react';
import navLogo from '../components/assets/images/logo10_1.svg'
import { Link } from 'react-router-dom';

function Footer() {


    return (
        <div className='footer'>
            <div className='footerColumn'>
                <div className='footerContainer'>
                    <div className='infoContainer'>
                    <div className='footerLeft'>

                        <b>Melkor Software, s.r.o.</b>
                     <a className="learnLink underline" href="mailto:info@melkor.cz">info@melkor.cz</a>
                        <br />
                        <b>Sídlo</b>
                        <div>Hlaváčova 618/28<br />614 00 Brno</div>
                    </div>

                    <div className='footerRight'>
                        <b>Datová schránka</b>
                        <div>s7zhync</div>
                        <br />
                        <b>IČO:</b>  173 12 914<div>vedená u Krajského soudu v Brně, zn. C 129441</div>
                        <a  href="https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1163732&typ=PLATNY" target="blank" className='learnLink underline'>Veřejný rejstřík</a>
                    </div>
                </div>
                    <Link className="navbar-brand logoContainer" to="/">
                        <img className="navLogo" src={navLogo} alt="melkor_logo" />
                        
                    </Link>
                </div>
                <div className='copyright'>Copyright © 2023 Melkor Software. Všechna práva vyhrazena.</div>
            </div>
        </div>
    );
}


export default Footer;