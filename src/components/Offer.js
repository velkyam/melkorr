import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../components/assets/images/software.svg'
import card2 from '../components/assets/images/plc.svg'
import card3 from '../components/assets/images/vzhled.svg'
import Zlin from '../components/assets/images/display2.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'




function Offer() {

    return (


        <div className="sectionContainer">
            <div className="widthContainer column">
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
                        Ať už potřebujete renovovat energetický dispečink,
                        automatizovat výrobní linku či modernizovat přehled nad spotřebou energií, Melkor Software Vám poskytne spolehlivé řešení s maximální flexibilitou a kontrolou.
                    </div>

                    <Link to='/reference' className='learnLink'>Podívejte se, co s námi můžete dokázat <FontAwesomeIcon className='icon' icon={faCircleRight} /></Link>
                </div>
                <div className='rightBg'> <img className="homeMac" src={Zlin} alt="Schematicke_zobrazeni" /></div>


                    </div> 


        </div>





    );
}


export default Offer;