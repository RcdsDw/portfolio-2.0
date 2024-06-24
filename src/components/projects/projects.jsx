import React from "react";
import "./projects.css"
import datas from "../../projects.json"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    return (
        <div id="containerProjects">
            <ul id="cards">
                {datas.map((data, i) => (
                    <li className="card" id={`card ${i + 1}`}>
                        <div className="card__content">
                            <div>
                                <h2 className="font-bold text-xl mb-2">{data.name}</h2>
                                <p className="text-l mb-3">{data.desc}</p>
                                    {data && data.techs.map((tech, i) => (
                                        <p key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tech}</p>
                                    ))}
                                <a className="linkProject" href={data.link}><FontAwesomeIcon icon={faCoffee} /> <p>Lien vers le site</p></a>
                            </div>
                            <figure>
                                <img src={data.img} alt="description"/>
                            </figure>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
