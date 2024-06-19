import React from "react";
import "./header .css"

export default function Header() {
    return (
        <div className="container">
            <a class="circle" href="https://github.com/RcdsDw"></a>
            <a className="link" href="#me">Profil</a>
            <a className="link" href="#containerProjects">Projets</a>
            <a className="link" href="#containerContact">Contact</a>
        </div>
    )
}