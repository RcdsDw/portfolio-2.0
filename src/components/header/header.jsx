import React from "react";
import "./header .css"

export default function Header() {
    return (
        <div className="container">
            <img className="logo" src="/me.png" alt="ma tete dessinée en logo" width={100}/>
            <a className="link" href="#">Accueil</a>
            <a className="link" href="#me">Profil</a>
            <a className="link" href="#">Projets</a>
            <a className="link" href="#">Contact</a>
        </div>
    )
}