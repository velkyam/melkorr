import React, { useEffect } from 'react';

import Zlin from '../components/assets/images/MR1.png'
import Zlin2 from '../components/assets/images/spotreba.png'
import Zlin3 from '../components/assets/images/trakcni.png'
import Zlin4 from '../components/assets/images/trakcni2.png'
import macbook from '../components/assets/images/macbook.jpg'
import 'lightbox.js-react/dist/index.css'
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react'



function Melkorvisum() {
    useEffect(() => {
        initLightboxJS("9C64-9D7D-1161-2794", "Individual");
    });
    return (


        <div className='sectionContainer'>

            <div className='melkorContainer heroContainer'>
                <div className='widthContainer heroTextContainer'>


                    <h1 className='aboutTitle'>
                        MelkorVisum
                    </h1>
                    <div className='aboutSubtitle'>
                        <p className='paraBig'>
                            Srdcem naší platformy je řídicí server, který zajišťuje komunikaci s technologií, systém varování a alarmů, správu deníků a další. K serveru lze připojit libovolný počet vizualizačních klientů – desktopových, případně mobilních nebo webových klientů, umožňujících zobrazení systémů, práci s deníky událostí a odesílání povelů. Pro menší projekty a místní řízení je samozřejmostí i možnost připojení klienta přímo k technologii, bez nutnosti dodávat celý řídicí server. Platforma podporuje všechny běžně využívané operační systémy (Windows, Linux, MacOS) s minimálními hardwarovými požadavky.
                        </p>

                    </div>

                    <img className='w-full rounded imageMac' src={macbook} alt="prop0"/>


                </div>
                <div className='imageRow'>
                    <div className='imageCol'>


                        <h1 className='aboutTitle '>
                            SCADA systémy
                        </h1>
                        <div className='imageText'>
                            <p className='paraBig'>
                                S našimi systémy pro vizualizaci a řízení máte schopnost monitorovat a ovládat energetické a průmyslové procesy v reálném čase nejen přímo na místě, ale i z jakéhokoli vzdáleného dispečinku. Kromě toho nabízíme specializovaná řešení pro třídění a sběr dat, což znamená schopnost efektivně a současně zaznamenávat komplexní data z různých zařízení. Tato data pak mohou být analyzována pro identifikaci problémů a optimalizaci provozu.
                            </p>
                        </div>
                    </div>
                    <img className='imageExampleFull' src={Zlin} alt="prop1" />
                    <SlideshowLightbox className='slideShow' modalClose="clickOutside" theme="lightbox" >
                        <img className='w-full rounded imageExample' src={Zlin} alt="prop1" />
                    </SlideshowLightbox>
                </div>
                <div className='imageRow'>
                    <img className='imageExampleFull Full2 Full2Mob' src={Zlin3} alt="prop2" />
                    <div className='imageCol'>

                        <h1 className='aboutTitle'>
                            Proč MelkorVisum?
                        </h1>
                        <div className='imageText'>
                            <p className='paraBig'>
                                Zatímco většina konkurenčních firem licencuje SCADA platformy třetích stran a staví své systémy od nich, naše řešení MelkorVisum jsme vyvinuli na vlastním know-how, což nám umožňuje flexibilně přizpůsobit každou část systému specifickým potřebám a požadavkům konkrétního zákazníka. Naše vizualizace je postavená na nejnovějších technologiích a vychází z moderních principů tvorby uživatelských rozhraní, díky čemuž je stabilní, bezpečná a uživatelsky přívětivá. Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš systém zakomponovat do existujících provozů.

                            </p>
                        </div>
                        <SlideshowLightbox className='slideShow' modalClose="clickOutside" theme="lightbox" >
                        <img className='w-full rounded imageExample' src={Zlin4} alt="prop2"/>  
                    </SlideshowLightbox>
                    </div>
                </div>
                <div className='melkorUse'>

                    <h1 className='aboutTitle'>
                        Případy použití
                    </h1>
                    <div className='imageText'>
                        <p className='paraBig'>

                            Naše inovativní řešení nalezne uplatnění v široké škále odvětví a oblastí, přinášejíc zásadní přínosy v mnoha ohledech. Jeho využití je možné v měnírnách a dispečinkách dopravních podniků, kde umožňuje efektivní správu a koordinaci dopravního provozu. Dále je vhodné pro energetické zdroje a rozvodnou síť, včetně fotovoltaických elektráren a transformátorových stanic. V průmyslových provozech zase naše řešení optimalizuje výrobní linky, zvyšuje efektivitu a umožňuje lepší řízení průmyslových procesů. V oblasti vytápění, klimatizace a inteligentního řízení budov přinášíme inovace, které umožňují optimalizaci spotřeby energie a zajišťují pohodlné prostředí v budovách. Dále podporujeme kontrolu spotřeby a komunikaci s elektroměry, plynoměry a dalšími měřicími zařízeními. Naše technologická řešení jsou rovněž využitelná v energetických dispečinkách a nabíjecích stanicích pro elektromobily, přičemž nabízíme komplexní a spolehlivé možnosti správy a monitoringu. To všechno je pouze začátek, naše řešení mohou být aplikována v mnoha dalších oblastech, poskytujíce tak flexibilitu a širokou škálu výhod pro různé odvětví a sektory.
                        </p>
                        <img className='imageExampleFull fullWidth' src={Zlin2} alt="prop3" />
                        <SlideshowLightbox className='slideShow' modalClose="clickOutside" theme="lightbox">
                        <img className='w-full rounded imageExample' src={Zlin2} alt="prop3"/>  
                    </SlideshowLightbox>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Melkorvisum;