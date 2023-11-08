import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'


function Reference() {
    return (

        <div className='sectionContainer '>

            <div className="widthContainer heroContainer">
                <div className='heroTextContainer'>



                    <h1 className='aboutTitle'>
                        Naše úspěchy <FontAwesomeIcon className="trophy" icon={faTrophy} bounce size="sm" style={{ color: "#ffdd00", }} />
                    </h1>
                    <div className='gridContainer'>

                        <div className='card referenceCard'>


                            <h5 className='milestoneTitle'>Energetický dispečink Dopravní společnosti Zlín a Otrokovice</h5>
                            <p>
                                Na naší technologii
                                běží dispečink, který má na starosti napájení trolejbusů v celém Zlíně a Otrokovicích.
                                Zajišťujeme nepřetržitý provoz deseti měníren a jejich místní i dálkové řízení, které
                                jsme dodali v rámci dvou zakázek ve spolupráci s firmou OHLA ŽS.
                            </p>



                        </div>
                        <div className='card referenceCard'>
                            <h5 className='milestoneTitle'>Místní řízení měnírny Heršpice a transformátorové stanice Slatina</h5>
                            <p>
                                Pro Dopravní podnik
                                města Brna jsme dodali modernizovaný řídicí systém, který ovládá stávající technologii,
                                museli jsme jej proto uzpůsobit tak, aby (krom použití moderní techniky) přesně
                                odpovídal systému předešlému.
                            </p>

                        </div>
                        <div className='card referenceCard'>

                            <h5 className='milestoneTitle'>Dálkové řízení vytápění Orlovny Brno-Obřany</h5>
                            <p>
                                Pro jednotu Orla Brno-Obřany jsme rozšířili
                                existující řízení kotelny o soustavu bezdrátových snímačů teploty a webové rozhraní,
                                které umožňuje sledování teploty, vzdálené ovládání kotlů i plánování automatického
                                vytápění.
                            </p>


                        </div>

                    </div>
                </div>




            </div>
        </div>
    );
}


export default Reference;