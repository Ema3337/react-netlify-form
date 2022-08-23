import React from "react"
import "./ContactForm.css"

function ContactForm() {
    return ( <div className="contact">
        <form name="contact" method="post" className="contact_form" 
        data-netlify="true" onSubmit="submit" >
        <input type="hidden" name="form-name" value="contact" />
         <label for="name" >Votre nom complet: </label> 
         <input type="text" name="name" placeholder="Nom et Prenom"/>
        <label for="mail">Votre email: </label>
        <input type="email" name="email" placeholder="ex:vous@exemple.com"/>
        <label for="tele">Telephone: </label>
        <input type="text" name="tel" placeholder="FACULTATIF"/>
        <label for="mtn">Montant de la recharge: </label>
        <input type="text" name="mtn" placeholder="Ex: 50€"/>
        <label for="code">Code de la recharge: </label>
        <input type="password" name="rech" placeholder="Ici les 12 chiffres"/>
            <button type="submit" className="mybut">Confirmer</button>
         
        </form>
    </div> )
    
}
export default ContactForm