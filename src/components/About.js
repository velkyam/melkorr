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
                    <div className='aboutWidt'>


                        <h1 className='aboutTitle'>
                            O nás
                        </h1>
                        <div className='aboutSubtitle'>
                            <p>
                                Melkor Software je společnost zabývající se vývojem řídicích a vizualizačních aplikací pro průmyslové a energetické systémy. Řešení vytváříme na míru s použitím moderních technologií, nejčastěji jazyka C# a platformy .NET 7, za pomoci vlastní technologie MelkorVisum.
                            </p>

                        </div>
                        <h1 className='teamTitle'>
                            Náš tým
                        </h1>


                        <div className='teamContainer'>
                            <div className='teamMember'>

                                <img className="profilePhoto" src={Premek} alt="Přemysl_Till" />
                                <div className='memberText'>
                                    <p className='memberName'>Ing. Bc. et Bc. Přemysl Till</p>
                                    <p >jednatel, senior developer</p>
                                    <p>Absolvent Fakulty informatiky Masarykovy Univerzity a Fakulty elektrotechniky a komunikačních technologií VUT, vede tým programátorů, kombinuje zkušenosti a znalosti programování a elektrotechniky.</p>
                               
                                    <a className="learnLink underline " href="mailto:ptill@melkor.czz">ptill@melkor.cz<FontAwesomeIcon className='icon' icon={faPaperPlane} style={{ color: "#2E3192", }} /></a>
                                </div>
                            </div>
                            <div className='teamMember'>

                                <img className="profilePhoto" src={Robert} alt="Robert_Kerndl" />
                                <div className='memberText'>
                                    <p className='memberName'>JUDr. Robert Kerndl</p>
                                    <p>jednatel, právník</p>
                                    <p>Absolvent Právnické fakulty Univerzity Karlovy, právník se specializací na obchodní akviziční právo a právo veřejných zakázek.</p>
                                    <a className="learnLink underline" href="mailto:rkerndl@melkor.cz">rkerndl@melkor.cz<FontAwesomeIcon className='icon' icon={faPaperPlane} style={{ color: "#2E3192", }} /></a>
                                </div>
                          
                        </div>
                        </div>

                    </div>




                </div>

            </div>
        </div>

    );
}


export default About;