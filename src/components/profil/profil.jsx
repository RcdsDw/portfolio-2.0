import React, { useEffect, useState } from "react";
import "./profil.css"

export default function Profil() {
  const [isResponseVisible, setIsResponseVisible] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  const lines = [
    "$ go run profil.go",
    "Bonjour à toi, je m'appelle Rafael Candido Da Silva et j'ai 25 ans.",
    "Je suis actuellement Développeur en Alternance chez Keematic.",
    "$",
  ];

  useEffect(() => {
      if (isResponseVisible) {
        setVisibleLines(0);
        const timer = setInterval(() => {
          setVisibleLines((prev) => {
            if (prev < lines.length) {
              return prev + 1;
            } else {
              clearInterval(timer);
              return prev;
            }
          });
        }, 300);
      }
    }, [isResponseVisible]);

    const handleClick = () => {
        setIsResponseVisible(!isResponseVisible);
    };


    return (
        <div className="containerProfil">
            <div className="me">
                <h1 className="name">
                    R<span className="green">A</span>
                    F<span className="green">A</span>
                    EL C<span className="green">A</span>
                    NDIDO D<span className="green">A </span>
                    SILV<span className="green">A</span>
                </h1>
                <h2 className="job">&#60;Concepteur Développeur d'Application &#47;&#62;</h2>
            </div>
            <div className="func">
                <h2 className="titleFunc">&#60;Profil &#47;&#62;</h2>
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
                    &nbsp; &nbsp; &nbsp;"Je suis actuellement %s chez %s.\n", prenom, nom, age, poste, entreprise&#41; <br />
                    &nbsp; &#125; <br />
                </p>

                <button className="btnProfil" onClick={handleClick}>Executer</button>

                <aside class={`bg-black text-white p-6 rounded-lg max-w font-mono ${isResponseVisible ? "aside-visible" : "aside-hidden"}`}>
                    <div class="flex justify-between items-center">
                        <div class="flex space-x-2 text-red-500">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <p class="text-sm">terminal</p>
                    </div>
                    <div class="mt-4">
                        <p class="text-white">
                            {lines.map((line, index) => (
                                <div
                                    key={index}
                                    className={`line ${(index === 0 || index === 3 ) && index < visibleLines ? "line-green line-visible" : index < visibleLines ? "line-visible" : ""}`}
                                >
                                    {index === 1 || index === 2 ? `  ${line}` : line}
                                </div>
                            ))}
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    )
}
