import React from 'react';
import Melkor1 from '../components/assets/images/melkor1.png'



function Melkorvisum() {
    return (

        <div className='sectionContainer'>
            
                <div className='widthContainer heroContainer'>
                <div className='heroTextContainer'>
                <div className='aboutWidth'>

                    <h1 className='aboutTitle'>
                        MelkorVisum
                    </h1>
                    <div className='aboutSubtitle'>
                        Jádrem naší platformy je řídicí server, který zajišťuje komunikaci s technologií, systém varování a alarmů, správu deníků a další. K tomuto serveru je následně možné připojovat desktopové, mobilní či webové vizualizační klienty. V současnosti dodáváme především moduly pro dálkové a místní řízení měníren MHD, samotný software je ale na konkrétní technologii nezávislý, lze jej proto použít pro širokou škálu průmyslových systémů.
                        Platforma podporuje všechny běžně využívané operační systémy (Windows, Linux, MacOS) s minimálními hardwarovými požadavky.
                        Základní funkce MelkorVisa ukážeme na konkrétním uplatnění na řízení sítě měníren:


                   
                    </div>
                    <img  src={Melkor1} alt="melkorvisum_interface" />
                </div>
                </div>

            </div>
        </div>
    );
}


export default Melkorvisum;