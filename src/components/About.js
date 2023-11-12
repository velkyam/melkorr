import React from 'react';
import Robert from '../components/assets/images/robert.jpg'
import Premek from '../components/assets/images/premek.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
function About() {
    return (

        <div className='sectionContainer'>

            <div className="widthContainer heroContainer">
                <div className='heroTextContainer'>
                    <h1 className='aboutTitle'>
                        O nás
                    </h1>
                    <div className='aboutSubtitle'>
                        <p className='paraBig'>
                            Melkor Software je moderní IT firma, která Vám nabízí komplexní softwarová řešení na
                            klíč.  Naše softwarové řešení je postavené na nejnovějších technologiích a vychází z moderních
                            principů tvorby uživatelských rozhraní, díky čemuž je stabilní, bezpečné a uživatelsky
                            přívětivé. Máme zkušenosti s řadou různých protokolů a technologií, není proto problém náš
                            systém zakomponovat do existujících provozů. Jsme vášnivý tým profesionálů s rozsáhlým spektrem dovedností od obchodních znalostí po technickou vynalézavost. Společně jsme vytvořili silnou, oddanou a kreativní pracovní atmosféru, která nám umožňuje neustále inovovat a přinášet našim klientům efektivní řešení.
                        </p>
                    </div>
                    <h1 className='teamTitle'>
                        Náš tým
                    </h1>
                    <div className='teamContainer'>
                        <div className='teamMember '>

                            <div className='memberText'>
                                <div className='profileRow'>
                                    <div className='image-cropper'>
                                        <img className="profilePhoto" src={Premek} alt="Přemysl_Till" />
                                    </div>
                                    <div className='column profileCol'>
                                        <p className='memberName'>Ing. Bc. et Bc. Přemysl Till</p>
                                        <p >jednatel, senior developer</p>
                                        <a className="learnLink underline " href="mailto:ptill@melkor.czz">ptill@melkor.cz<FontAwesomeIcon className='icon' icon={faPaperPlane} style={{ color: "#2E3192", }} /></a>
                                    </div>
                                </div>
                                <p>Absolvent Fakulty informatiky Masarykovy Univerzity a Fakulty elektrotechniky a komunikačních technologií VUT, vede tým programátorů, kombinuje zkušenosti a znalosti programování a elektrotechniky.</p>
                            </div>
                        </div>
                        <div className='teamMember'>
                            <div className='memberText'>
                                <div className='profileRow'>
                                    <div className='image-cropper'>
                                        <img className="profilePhoto" src={Robert} alt="Robert_Kerndl" />
                                    </div>
                                    <div className='column profileCol'>
                                        <p className='memberName'>JUDr. Robert Kerndl</p>
                                        <p>jednatel, právník</p>
                                        <a className="learnLink underline" href="mailto:rkerndl@melkor.cz">rkerndl@melkor.cz<FontAwesomeIcon className='icon' icon={faPaperPlane} style={{ color: "#2E3192", }} /></a>
                                    </div>
                                </div>
                                <p>Absolvent Právnické fakulty Univerzity Karlovy, právník se specializací na obchodní akviziční právo a právo veřejných zakázek.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default About;