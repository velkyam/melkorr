// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqoryke");
  if (state.succeeded) {
    return <p>Děkujeme za dotaz. Brzy se vám ozveme!</p>;
  }
  return (
    <div className='sectionContainer'>
    <div className='hero heroContact'>
      <div className='contactContainer'>

            <form className="formContainer" onSubmit={handleSubmit}>
            <h2 className='formTitle'>Máte dotaz? Neváhejte nám napsat. </h2>
             
                <label htmlFor="full-name" className="formLabel">Vaše jméno</label>
                <input type="text" name="name" id="full-name" placeholder="Karel Novák" required autoComplete="true" className="form-control formInput"/>
        
                <label htmlFor="email" className='formLabel'>
                  Váš e-mail
                </label>
                <input id="email" type="email" name="email" placeholder="karel.novak@gmail.com" required autoComplete="true" className="form-control formInput"/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
           
                <label htmlFor="message" className='formLabel'>S čím vám můžeme poradit?</label>
                <textarea className="form-control formText" id="message" name="message" placeholder="Rád bych chtěl probrat jestli Melkor Software poskytuje správné řešení pro náš podnik." required rows="5"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
              
              <button className="btn btn-success learnButton submitButton purpleBg" type="submit" disabled={state.submitting}>
                Odeslat
              </button>
            </form>
  
            <div className='column rightContainer'>
            <div className='column companyInfo'>
            <h2 className='formTitle'>Melkor Software, s.r.o.</h2>
          
                        <p><a className="learnLink" href="mailto:info@melkor.cz">info@melkor.cz<FontAwesomeIcon className='icon' icon={faPaperPlane} style={{ color: "#2e3192", }} /></a></p>
                        <p>Hlaváčova 618/28 <br/> 614 00 Brno</p>
                        <p>Datová schránka: <span>s7zhync</span></p>  
                        <p>IČO: <span>173 12 914</span> <br/> vedená u Krajského soudu v Brně, zn. C 129441</p>
                        <a  href="https://or.justice.cz/ias/ui/rejstrik-firma.vysledky?subjektId=1163732&typ=PLATNY" target="blank" className='learnLink underline'>Veřejný rejstřík</a>

      </div>
      </div>
      </div>
          </div>
        </div>


  );
}

export default ContactForm;