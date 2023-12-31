import React from 'react';
import { Link } from 'react-router-dom';
import poster from './assets/images/poster.jpg'
import video from './assets/images/Untitled.mp4'
import video2 from './assets/images/Untitled.webm'
import Typewriter from 'typewriter-effect';

function Hero() {
    return (

        <div className='hero'>
                <div className="widthContainer heroContainer">
                    <div className='column'>

                        <h1 className='heroTitle'>
                            <span>Moderní řešení pro
                                <Typewriter className='typeWriter' 
                                    options={{
                                        strings: ['průmyslové', 'energetické','dopravní', 'obchodní'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                                systémy.
                            </span>
                        </h1>
                        <div className='heroSubtitle'>
                        Nabízíme komplexní softwarová řešení na
klíč. Prostřednictvím našich špičkových SCADA systémů Vám můžeme usnadnit řízení
provozu a zvýšit jeho efektivitu.
                        </div>
                        <Link to='/melkorvisum' className='middleButton'> <button type="button" className="btn btn-success btn-lg learnButton melkorButton ">Více o našem řešení</button></Link>
                    </div>
                    <div className='videoContainer'>
                        <video loop autoPlay muted playsInline poster={poster} className='bgVideo'>
                            <source src={video2} type="video/webm" />
                            <source src={video} type="video/mp4" />
                            <p>Your browser doesn't support HTML video. Here is a</p>
                        </video>
                    </div>
                </div>

        </div>

    );
}


export default Hero;