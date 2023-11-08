import React from 'react';
import { Link } from 'react-router-dom';
import map from '../components/assets/images/Diagram.svg'
import sifr from '../components/assets/images/sifr.svg'
import os from '../components/assets/images/os.svg'
import zobrazeni from '../components/assets/images/zobrazeni.svg'
import protokol from '../components/assets/images/protokol.svg'
import support from '../components/assets/images/support.svg'
import scale from '../components/assets/images/scale.svg'
import reseni from '../components/assets/images/reseni.svg'
import spolehlivost from '../components/assets/images/spolehlivost.svg'

import card1 from '../components/assets/images/software.svg'
import card2 from '../components/assets/images/plc.svg'
import card3 from '../components/assets/images/vzhled.svg'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'




function Offer() {

    return (


        <div className="sectionContainer">
            <div className="widthContainer cardsectionContainer">
                <div className='melkorvisumContainer'><h2 className='melkorvisumTitle'>MelkorVisum</h2>Našim hlavním produktem je plně přizpůsobitelná 
      a integrovaná platforma MelkorVisum, která nám umožňuje efektivně vyvíjet vysoce spolehlivé vizualizační a řídicí systémy pro průmyslové, energetické či dopravní provozy. 
                </div>
                <div className='gridContainer'>

                    <Link to='/melkorvisum' className='card card1'>
                        <div className='cardTitle'>Kompletní softwarová řešení na klíč</div>
                        <img className="cardIcon" src={card1} alt="software" />
                        <div className='learnLink'>
                            Více o MelkorVisu <FontAwesomeIcon className='icon' icon={faCircleRight} style={{ color: "#3fa9f5", }} />
                        </div>
                    </Link>

                    <Link to='/melkorvisum' className='card card2'>
                        <div className='cardTitle'>Integrace se stávajícími technologiemi</div>
                        <img className="cardIcon" src={card2} alt="control_panel" />
                        <div className='learnLink'>
                            Více o MelkorVisu <FontAwesomeIcon className='icon' icon={faCircleRight} style={{ color: "#ed1e79", }} />
                        </div>
                    </Link>

                    <Link to='/melkorvisum' className='card card3'>
                        <div className='cardTitle'>Moderní vzhled přizpůsobený na míru</div>
                        <img className="cardIcon" src={card3} alt="computer" />
                        <div className='learnLink'>
                            Více o MelkorVisu <FontAwesomeIcon className='icon' icon={faCircleRight} style={{ color: "#39b54a", }} />
                        </div>
                    </Link>

                </div>
            </div>
            <div className="widthContainer howContainer ">
                <div className='howTextContainer'>
                    <div className='howTitle'>Jedna platforma,<br /> tisíce možností.
                    </div>
                    <div className='howText'>
                        Od řídicích a vizualizačních aplikací po sofistikované algoritmy, MelkorVisum poskytuje našim průmyslovým a energetickým partnerům maximální flexibilitu a kontrolu.
                    </div>

                    <Link to='/reference' className='learnLink'>Podívejte se, co všechno s námi můžete dokázat <FontAwesomeIcon className='icon' icon={faCircleRight} /></Link>
                </div>
                <div className='rightBg'> <img className="map" src={map} alt="station_scheme" /></div>


            </div>
            <div className="widthContainer offerContainer">
            <div className='howTitle offerTitle'>Co nabízíme našim klientům</div>
            <div className='offerText'>Ať už potřebujete renovovat energetický dispečink,
      automatizovat výrobní linku či modernizovat přehled nad spotřebou energií, Melkor Software Vám poskytne spolehlivé řešení k vašim potřebám.</div>




            <div className="featureGrid ">
                <Link className="gridItem" to='/melkorvisum'>
                    <img className='gridIcon' src={reseni} alt="reseni_icon" />
                    <div className='gridText'>Řešení otestované v praxi</div>
                </Link>
                <Link className="gridItem" to='/melkorvisum'>
                    <img className='gridIcon' src={scale} alt="scale_icon" />
                    <div className='gridText'>Škálovatelná architektura</div>
                </Link>
                <Link className="gridItem" to='/melkorvisum'>
                    <img className='gridIcon' src={support} alt="support_icon" />
                    <div className='gridText'>Uživatelská podpora 24/7</div>
                </Link>
                <Link className="gridItem" to='/melkorvisum'>
                    <img className='gridIcon' src={spolehlivost} alt="spolehlivost_icon" />
                    <div className='gridText'>Vysoká spolehlivost</div>
                </Link>
                <Link className="gridItem" to='/melkorvisum'>
                    <img className='gridIcon' src={os} alt="OS_icon" />
                    <div className='gridText'>Nezávislost na OS/HW</div>
                </Link>
                <Link className="gridItem" to='/melkorvisum'>
                    <img className='gridIcon' src={sifr} alt="security_icon" />
                    <div className='gridText'>Šifrovaná komunikace</div>
                </Link>
                <Link className="gridItem" to='/melkorvisum'>
                    <img className='gridIcon' src={zobrazeni} alt="zobrazeni_icon" />
                    <div className='gridText'>Přehledné zobrazení</div>
                </Link>
                <Link className="gridItem" to='/melkorvisum'>
                    <img className='gridIcon' src={protokol} alt="protocol_icon" />
                    <div className='gridText'>Podpora protokolů</div>
                </Link>

            </div>
            </div>





        </div>





    );
}


export default Offer;