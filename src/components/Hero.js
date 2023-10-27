import React from 'react';
import { Link } from 'react-router-dom';
import video from './assets/images/Untitled.mp4'
import video2 from './assets/images/Untitled.webm'
import card1 from '../components/assets/images/card1.svg'
import card2 from '../components/assets/images/card2.svg'
import card3 from '../components/assets/images/card3.svg'

function Hero() {

    return (

        <div className='hero'>
            <div className='heroWidth'>
                <div className="heroContainer">
                    <div className='heroTextContainer'>
                        <h1 className='heroTitle'>Spolehlivé řešení pro komplexní systémy.
                        </h1>
                        <div className='heroSubtitle'>
                            MelkorVisum je moderní integrovaná platforma plně přizpůsobitelná pro nespočet použití.
                        </div>
                        <Link className='nodecor' to='/melkorvisum'> <button type="button" class="btn btn-primary btn-lg learnButton">MelkorVisum</button></Link>
                    </div>
                    <div className='videoContainer'>
                        <video width="100%" loop autoPlay muted playsInline className='bgVideo'>
                            <source src={video2} type="video/webm" />
                            <source src={video} type="video/mp4" />
                            <p>Your browser doesn't support HTML video. Here is a</p>
                        </video>
                    </div>
                </div>
                
                <div className='thirdText'><h2 className='thirdTextTitle'>MelkorVisum</h2>Platforma MelkorVisum nám umožňuje rychle a efektivně vyvíjet vysoce přizpůsobitelné, spolehlivé systémy k vizualizaci dopravních, průmyslových či energetických provozů.
                </div>
                <div className='gridContainer'>
                    <div className='card1'>
                        <div className='cardTitle'>Kompletní softwarová řešení na klíč</div>
                        <img className="cardIcon" src={card1} alt="software" />
                        <Link to='/melkorvisum' className='learnLink'>Více o MelkorVisu</Link>
                    </div>
                    <div className='card2'>
                        <div className='cardTitle'>Integrace se stávajícími technologiemi</div>
                        <img className="cardIcon" src={card2} alt="control_panel" />
                        <Link to='/melkorvisum' className='learnLink'>Více o MelkorVisu</Link>
                    </div>
                    <div className='card3'>
                        <div className='cardTitle'>Moderní vzhled přizpůsobený na míru</div>
                        <img className="cardIcon" src={card3} alt="computer" />
                        <Link to='/melkorvisum' className='learnLink'>Více o MelkorVisu</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Hero;