import React from "react";
import "./header .css"

export default function Header() {
    return (
        <div className="container">
            <h1 className="logo">Logo</h1>
            <a className="link" href="#">Accueil</a>
            <a className="link" href="#">Profil</a>
            <a className="link" href="#">Projets</a>
            <a className="link" href="#">Contact</a>
        </div>
    )
}