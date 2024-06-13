import React from "react";
import "./profil.css"

export default function Profil() {
    return (
        <div className="containerProfil">
            <div className="me">
                <h1 className="name">
                    R<span className="green">A</span>
                    F<span className="green">A</span>
                    EL C<span className="green">A</span>
                    NDIDO D<span className="green">A</span> 
                    SILV<span className="green">A</span>
                </h1>
                <h2 className="job">&#12296;Concepteur Développeur d'Application&#12297;</h2>
            </div>
            <div className="textMe">
                <p>
                    <span className="red">package</span> main<br />
                    <br />
                    <span className="red">import</span> 	&#40; <br />
                    &nbsp; "fmt" <br />
                    &#41; <br />
                    <br />
                    <span className="red">func</span> <span className="violet">main</span>&#40;&#41; &#123; <br />
                    &nbsp; prenom <span className="blue">:= "Rafael"</span> <br />
                    &nbsp; nom <span className="blue">:= "Candido Da Silva"</span> <br />
                    &nbsp; age <span className="blue">:= 25</span> <br />
                    &nbsp; poste <span className="blue">:= "Développeur en Alternance"</span> <br />
                    &nbsp; entreprise <span className="blue">:= "Keematic"</span> <br />
                    &nbsp; <br />
                    &nbsp; fmt.<span className="violet">Printf</span>&#40;"Bonjour à toi, je m'appelle %s %s et j'ai %d ans.\n"+ <br />
                    &nbsp; &nbsp;"Je suis actuellement %s chez %s.\n", prenom, nom, age, poste, entreprise&#41; <br />
                    &#125; <br />
                </p>
            </div>
        </div>
    )
}
