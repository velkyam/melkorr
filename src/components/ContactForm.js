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
    <div className='hero'>
    <div className='heroWidth'>
        <div className="heroContainer">
    
    <form onSubmit={handleSubmit}>

        <label for="full-name">Vaše jméno</label>
    <input type="text" name="name" id="full-name" placeholder="Karel Novák" required></input>



      <label htmlFor="email">
      Váš e-mail
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="karel.novak@gmail.com"
        required
        />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
        />



      <label>S čím vám můžeme potřebujete pomoci?</label>
      <textarea
 
 id="message"
 name="message"
 placeholder="Rád bych se dozvěděl více o MelkorVisu, ale nevím kde začít."
 required
 />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        />

      <button type="submit" disabled={state.submitting}>
        Odeslat
      </button>
    </form>
    </div>
    </div>
    </div>
  );
}

export default ContactForm;