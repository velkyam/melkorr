import React from 'react';

import Zlin from '../components/assets/images/MR1.png'
import Zlin2 from '../components/assets/images/spotreba.png'
import Zlin3 from '../components/assets/images/trakcni.png'
import Zlin4 from '../components/assets/images/MR6-mistni.png'


function Melkorvisum() {
    return (

        <div className='sectionContainer'>
            
                <div className='widthContainer heroContainer'>
                <div className='heroTextContainer'>
             

                    <h1 className='aboutTitle'>
                        MelkorVisum
                    </h1>
                    <div className='aboutSubtitle'>
                        Jádrem naší platformy je řídicí server, který zajišťuje komunikaci s technologií, systém varování a alarmů, správu deníků a další. K tomuto serveru je následně možné připojovat desktopové, mobilní či webové vizualizační klienty. V současnosti dodáváme především moduly pro dálkové a místní řízení měníren MHD, samotný software je ale na konkrétní technologii nezávislý, lze jej proto použít pro širokou škálu průmyslových systémů.
                        Platforma podporuje všechny běžně využívané operační systémy (Windows, Linux, MacOS) s minimálními hardwarovými požadavky.
                        Základní funkce MelkorVisa ukážeme na konkrétním uplatnění na řízení sítě měníren:


                   
                    </div>
                    <h5>Schématické zobrazení technologie</h5>
                                        <img className='imageExample' src={Zlin} alt="melkorvisum_interface" />

                                                <h5>Schéma trakční sítě</h5>
                                        <img className='imageExample' src={Zlin3} alt="melkorvisum_interface" />

                                                <h5>Energetické limity</h5>
                                        <img className='imageExample' src={Zlin2} alt="melkorvisum_interface " />
                                          
                </div>

            </div>
        </div>
    );
}


export default Melkorvisum;