import React from 'react';
import { Link } from 'react-router-dom';
import os from '../components/assets/images/tech.svg'
import protokol from '../components/assets/images/performance.svg'
import support from '../components/assets/images/custsupport.svg'
import scale from '../components/assets/images/license.svg'
import reseni from '../components/assets/images/secure.svg'
import spolehlivost from '../components/assets/images/testovani.svg'
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
            <div className="widthContainer column featureSection">
                <div className='howTitle offerTitle'>Co nabízíme našim klientům</div>

                <div className='featureGrid'>
                    <div className='column nabidkaCard'>
        

                        <img className='gridIcon' src={reseni} alt="reseni_icon" />
                        <h5 className='milestoneTitle'>
                            Vysokou spolehlivost s důrazem na bezpečnost
                        </h5>
          
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at. Tortor condimentum lacinia quis vel eros donec ac. </p>
                    </div>
                    <div className='column nabidkaCard'>
                        <img className='gridIcon' src={protokol} alt="nolicense_icon" />
                        <h5 className='milestoneTitle'>Nezávislost na dokupování licencí od třetích stran</h5>
                        <p>Convallis tellus id interdum velit laoreet id donec. Vel pharetra vel turpis nunc eget lorem dolor sed. In cursus turpis massa tincidunt dui ut ornare lectus. Venenatis urna cursus eget nunc. Massa tincidunt dui ut ornare.</p>
                    </div>
                    <div className='column nabidkaCard'>
                    <img className='gridIcon' src={scale} alt="scale_icon" />
                        <h5 className='milestoneTitle'>Vysoce škálovatelnou architekturu
                        </h5>
                        <p>Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Etiam sit amet nisl purus in mollis nunc sed id. Nisl nunc mi ipsum faucibus vitae. Eu consequat ac felis donec. Nisi porta lorem mollis aliquam ut porttitor. Bibendum at varius vel pharetra.</p>
                    </div>
                </div>
                <div className='featureGrid'>
                    <div className='column nabidkaCard'>
                    <img className='gridIcon' src={spolehlivost} alt="test_icon" />
                        <h5 className='milestoneTitle'>
                            Řešení otestované v praxi</h5>
                        <p>Auctor neque vitae tempus quam pellentesque. Cras ornare arcu dui vivamus arcu. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Arcu bibendum at varius vel pharetra vel turpis.</p>
                    </div>
                    <div className='column nabidkaCard'>
                    <img className='gridIcon' src={os} alt="stavajici_technologie_icon" />
                        <h5 className='milestoneTitle'>Širokou podporu pro stávající technologie</h5>
                        <p>Ullamcorper a lacus vestibulum sed arcu non odio euismod. Id cursus metus aliquam eleifend mi. Ante metus dictum at tempor commodo ullamcorper a lacus. Lobortis mattis aliquam faucibus purus in massa. Consectetur adipiscing elit duis tristique.</p>
                    </div>
                    <div className='column nabidkaCard'>
                    <img className='gridIcon' src={support} alt="support_icon" />
                        <h5 className='milestoneTitle'>Uživatelskou podporu 24/7</h5>
                        <p>Quam viverra orci sagittis eu volutpat odio facilisis. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Magnis dis parturient montes nascetur ridiculus mus mauris. Dignissim convallis aenean et tortor at risus viverra adipiscing at.</p>
                    </div>
                </div>
            </div>





        </div>





    );
}


export default Offer;