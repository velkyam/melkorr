// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xoqoryke");
  if (state.succeeded) {
    return <p>Děkujeme za dotaz. Brzy se vám ozveme!</p>;
  }
  return (
    <div className='sectionContainer'>
    <div className='hero'>
      <div className="heroWidth">
          <div className='contactInfo'>

          </div>
            <form className="formContainer" onSubmit={handleSubmit}>
            <h1 className='thirdTextTitle'>Máte dotaz? Neváhejte nám napsat.
                        </h1>
              <div className='col-12'>
                <label htmlFor="full-name" className="formLabel">Vaše jméno</label>
                <input type="text" name="name" id="full-name" placeholder="Karel Novák" required autoComplete="true" className="form-control formInput"/>
              </div>
              <div className='col-auto'>
                <label htmlFor="email" className='formLabel'>
                  Váš e-mail
                </label>
                <input id="email" type="email" name="email" placeholder="karel.novak@gmail.com" required autoComplete="true" className="form-control formInput"/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
              </div>
              <div className='col-auto'>
                <label htmlFor="message" className='formLabel'>S čím vám můžeme poradit?</label>
                <textarea className="form-control formText" id="message" name="message" placeholder="Rád bych se dozvěděl více o MelkorVisu, ale nevím kde začít." required rows="5"/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
              </div>
              <button className="btn btn-primary" type="submit" disabled={state.submitting}>
                Odeslat
              </button>
            </form>
          </div>
        </div>
        </div>


  );
}

export default ContactForm;