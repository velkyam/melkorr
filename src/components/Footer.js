import React from 'react';
import navLogo from '../components/assets/images/logo13.svg'
import { Link } from 'react-router-dom';

function Footer() {


    return (
        <div className='footer '>
            <div className='footerColumn widthContainer'>
                <div className='footerContainer'>
                    <div className='infoContainer'>
                    <div className='footerLeft'>

                        <b>Melkor Software, s.r.o.</b>
                        <p><a className="learnLink" href="mailto:info@melkor.cz">info@melkor.cz</a></p>
                        <br />
                        <b>Sídlo</b>
                        <p>Hlaváčova 618/28<br />614 00 Brno</p>
                    </div>

                    <div className='footerRight'>
                        <b>Datová schránka</b>
                        <p>s7zhync</p>
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