import React, { useRef } from "react";
import "./contact.css";

import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm("service_weaobhq","template_wcajg4i", form.current, {
          publicKey: '0mHWmmh55Iduvm1da',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <div id="containerContact">
            <div className="screen">
                <div className="screen-header flex justify-between items-center">
                    <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-sm">bash</p>
                </div>
                <div className="screen-body">
                    <div className="screen-body-item left">
                    <div className="app-title">
                        <span>Contactez-moi</span>
                    </div>
                    </div>
                    <div className="screen-body-item">
                    <form className="app-form" ref={form} onSubmit={sendEmail}>
                        <div className="app-form-group">
                            <input className="app-form-control" placeholder="PRENOM" type="text" name="first_name"/>
                        </div>
                        <div className="app-form-group">
                            <input className="app-form-control" placeholder="NOM" type="text" name="last_name"/>
                        </div>
                        <div className="app-form-group">
                            <input className="app-form-control" placeholder="EMAIL" type="email" name="email"/>
                        </div>
                        <div className="app-form-group message">
                            <textarea className="app-form-control" placeholder="MESSAGE" name="message" maxLength={500}/>
                        </div>
                        <div className="app-form-group buttons">
                            <input className="app-form-button" type="submit" value="Envoyer"/>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}