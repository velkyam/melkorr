import React, {useEffect} from 'react';

import Zlin from '../components/assets/images/MR1.png'
import Zlin2 from '../components/assets/images/spotreba.png'
import Zlin3 from '../components/assets/images/trakcni.png'
import Zlin4 from '../components/assets/images/MR6-mistni.png'
import 'lightbox.js-react/dist/index.css'
import {SlideshowLightbox, initLightboxJS} from 'lightbox.js-react'



function Melkorvisum() {
    useEffect(() => {
        initLightboxJS("9C64-9D7D-1161-2794", "Individual");
      });
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
                    <SlideshowLightbox className='container grid grid-cols-3 gap-2 mx-auto' showThumbnails={true}>
  <img className='w-full rounded imageExample' src={Zlin}/>
  <img className='w-full rounded imageExample' src={Zlin3} />  
  <img className='w-full rounded imageExample' src={Zlin2} />
 
</SlideshowLightbox> 
                   </div>

            </div>
        </div>
    );
}


export default Melkorvisum;