import React from 'react';
import { Link } from 'react-router-dom';



function Getstarted() {

    return (


           


<div className='sectionContainer3'>


                <div className="widthContainer column ">

                <div className='getstartedContainer'>

                    <div className='getstartedTitle'>Zaujala Vás naše nabídka?</div>
                    <p className='getstartedP'>Poskytněte nám pár rychlých údajů, a náš tým se s Vámi co nejdříve spojí. </p>
                    <Link className='nodecor mx-auto' to='/kontakt'><button type="button" className="btn btn-success btn-lg learnButton purpleBg" >Kontaktujte nás</button></Link>
                </div>



</div>
               


         </div>
       





    );
}


export default Getstarted;