import React from "react";
import "./header .css"

export default function Header() {
    return (
        <div className="container">
            <a class="logo" href="https://github.com/RcdsDw"><img src="/me.png" alt="" /></a>
            <a className="link" href="#me">Profil</a>
            <a className="link" href="#containerProjects">Projets</a>
            <a className="link" href="#containerContact">Contact</a>
        </div>
    )
}