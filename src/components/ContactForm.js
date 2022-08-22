import React from "react"
import "./ContactForm.css"

function ContactForm() {
    return ( <div className="contact">
        <form name="contact" method="post" className="contact_form" data-netlify="true" onSubmit="submit" >
        <input type="hidden" name="form-name" value="contact" />
         <label for="name" >Votre nom complet: </label>  <input type="text" name="name" placeholder="Nom et Prenom"/>
        <label for="mail">Votre email: </label><input type="email" name="email"placeholder="ex:vous@exemple.com"/>
        <label for="genre">Choisissez votre recharge: </label> <select name="type">
        <option value="tc">TRANSCARSH </option><option value="pcsa">PCSA </option><option value="neo">NEOSURFA </option>
        </select>
        
            <button type="submit" className="mybut">Confirmer</button>
         
        </form>
    </div> )
    
}
export default ContactForm