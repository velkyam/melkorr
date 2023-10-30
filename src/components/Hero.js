import React from 'react';
import { Link } from 'react-router-dom';
import video from './assets/images/Untitled.mp4'
import video2 from './assets/images/Untitled.webm'
import Typewriter from 'typewriter-effect';

function Hero() {
    return (

        <div className='hero'>
                <div className="widthContainer heroContainer">
                    <div className='heroTextContainer'>

                        <h1 className='heroTitle'>
                            <span>Snadné řešení pro
                                <Typewriter className='typeWriter' 
                                    options={{
                                        strings: ['dopravní', 'průmyslové', 'energetické', 'obchodní'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                                systémy.
                            </span>
                        </h1>
                        <div className='heroSubtitle'>
                            MelkorVisum je moderní integrovaná platforma plně přizpůsobitelná pro jakkoli náročný případ použití.
                        </div>
                        <Link to='/melkorvisum'> <button type="button" className="btn btn-success btn-lg learnButton melkorButton ">MelkorVisum</button></Link>
                    </div>
                    <div className='videoContainer'>
                        <video width="100%" loop autoPlay muted playsInline className='bgVideo'>
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