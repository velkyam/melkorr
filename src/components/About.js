import React from 'react';
import Robert from '../components/assets/images/robert.jpg'
import Premek from '../components/assets/images/premek.jpg'

function About() {
    return (

        <div className='sectionContainer'>
        <div className='aboutContainer'>
            <div className="heroContainer">
                <div className='heroTextContainer'>
                

                    <h1 className='aboutTitle'>
                        O nás
                    </h1>
                    <div className='aboutSubtitle'>
                        Melkor Software je společnost zabývající se vývojem řídicích a vizualizačních aplikací pro průmyslové a energetické systémy. Řešení vytváříme na míru s použitím moderních technologií, nejčastěji jazyka C# a platformy .NET 7, za pomoci vlastní technologie MelkorVisum.
                    </div>
                    <h1 className='teamTitle'>
                        Náš tým
                    </h1>


                    <div className='teamContainer'>
                        <div className='teamMember'>
                            <img className="profilePhoto" src={Premek} alt="Přemysl_Till" />
                            <div className='memberText'>
                                <h4 className='aboutName'>Ing. Bc. et Bc. Přemysl Till</h4>
                                <p className='aboutPosition'>jednatel, senior developer</p>
                                <p className='profileText'>Absolvent Fakulty informatiky Masarykovy Univerzity a Fakulty elektrotechniky a komunikačních technologií VUT, vede tým programátorů, kombinuje zkušenosti a znalosti programování a elektrotechniky.</p>
                                <a className="underline" href="mailto:ptill@melkor.czz">ptill@melkor.cz</a>
                            </div>
                        </div>
                        <div className='teamMember'>
                            <img className="profilePhoto" src={Robert} alt="Robert_Kerndl" />
                            <div className='memberText'>
                                <h4 className='aboutName'>JUDr. Robert Kerndl</h4>
                                <p className='aboutPosition'>jednatel, právník</p>
                                <p className='profileText'>Absolvent Právnické fakulty Univerzity Karlovy, právník se specializací na obchodní akviziční právo a právo veřejných zakázek.</p>
                                <a className="underline" href="mailto:rkerndl@melkor.cz">rkerndl@melkor.cz</a>
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