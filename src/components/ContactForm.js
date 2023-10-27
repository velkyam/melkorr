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
    <div class="contactForm">

      <form onSubmit={handleSubmit} class="mb-3" >
        <label for="full-name">Vaše jméno</label>
    <input class="form-control" type="text" name="name" id="full-name" placeholder="Karel Novák" required></input>
      <label htmlFor="email">
      Váš e-mail
      </label>
      <input class="form-control"
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
        class="form-control"
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
  );
}

export default ContactForm;