import React from 'react';
import { Link } from 'react-router-dom';
import map from '../components/assets/images/map.svg'
import sifr from '../components/assets/images/sifr.svg'
import os from '../components/assets/images/os.svg'
import zobrazeni from '../components/assets/images/zobrazeni.svg'
import protokol from '../components/assets/images/protokol.svg'
import support from '../components/assets/images/support.svg'
import scale from '../components/assets/images/scale.svg'
import reseni from '../components/assets/images/reseni.svg'
import spolehlivost from '../components/assets/images/spolehlivost.svg'

function Offer() {

    return (


        <div className="sectionContainer">
            <div className="howContainer">
                <div className='howTextContainer'>
                    <div className='howTitle'>Jedna platforma,<br /> tisíce možností.
                    </div>
                    <div className='howText'>
                        Od řídicích a vizualizačních aplikací po sofistikované algoritmy, MelkorVisum platforma poskytuje našim průmyslovým a energetickým partnerům maximální flexibilitu a kontrolu.
                    </div>

                    <Link to='/melkorvisum' className='learnLink'>Podívejte se, jak to všechno jde dohromady</Link>
                </div>
                <div className='rightBg'> <img className="map" src={map} alt="station_scheme" /></div>

            </div>

            <div className='howTitle offerTitle'>Co nabízíme našim klientům</div>
            <div className='offerText'>Ať už jste organizace veřejné dopravy, soukromý přepravce nebo velká korporace, Melkor poskytuje řešení na míru k vaším potřebám.</div>

            <div class="heroWidth">

                <div class="featureGrid">
                    <Link class="nodecor gridItem" to='/melkorvisum'>
                        <img className='gridIcon' src={reseni} alt="reseni_icon" />
                        <div className='gridText'>Řešení otestované v praxi</div>
                    </Link>
                    <Link class="nodecor gridItem" to='/melkorvisum'>
                        <img className='gridIcon' src={scale} alt="scale_icon" />
                        <div className='gridText'>Škálovatelná architektura</div>
                    </Link>
                    <Link class="nodecor gridItem" to='/melkorvisum'>
                        <img className='gridIcon' src={support} alt="support_icon" />
                        <div className='gridText'>Uživatelská podpora 24/7</div>
                    </Link>
                    <Link class="nodecor gridItem" to='/melkorvisum'>
                        <img className='gridIcon' src={spolehlivost} alt="spolehlivost_icon" />
                        <div className='gridText'>Vysoká spolehlivost</div>
                    </Link>
                    <Link class="nodecor gridItem" to='/melkorvisum'>
                        <img className='gridIcon' src={os} alt="OS_icon" />
                        <div className='gridText'>Nezávislost na OS/HW</div>
                    </Link>
                    <Link class="nodecor gridItem" to='/melkorvisum'>
                        <img className='gridIcon' src={sifr} alt="security_icon" />
                        <div className='gridText'>Šifrovaná komunikace</div>
                    </Link>
                    <Link class="nodecor gridItem" to='/melkorvisum'>
                        <img className='gridIcon' src={zobrazeni} alt="zobrazeni_icon" />
                        <div className='gridText'>Přehledné zobrazení</div>
                    </Link>
                    <Link class="nodecor gridItem" to='/melkorvisum'>
                        <img className='gridIcon' src={protokol} alt="protocol_icon" />
                        <div className='gridText'>Podpora protokolů</div>
                    </Link>

                </div>

            </div>


        </div>





    );
}


export default Offer;