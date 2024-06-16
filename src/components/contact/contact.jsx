
import React from "react";

export default function Contact() {
    return (
        <div className="containerContact">
            <form action="">
                <input type="text" id="firstname" name="firstname" placeholder="Prénom"/>
                <input type="text" id="lastname" name="lastname" placeholder="Nom"/>
                <input type="email" id="email" name="email" placeholder="Adresse email"/>
                <input type="textarea" id="message" name="message" placeholder="Rajoutez un petit quelque chose !"/>
            </form>
        </div>
    )
}