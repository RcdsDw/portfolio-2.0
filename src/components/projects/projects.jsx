import React from "react";
import "./projects.css"
import datas from "../../projects.json"

import { UilLink } from '@iconscout/react-unicons'

export default function Projects() {
    return (
        <div className="containerProjects">
            {datas.map((data, i) => (
                <div key={i} className="max-w-sm rounded overflow-hidden shadow-lg card">
                    <img className="w-full" src={data.img} alt="un aperçu du projet"/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{data.name}</div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {data && data.techs.map((tech, i) => (
                            <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tech}</span>
                        ))}
                    </div>
                    <a className="linkProject" href={data.link}><UilLink/></a>
                </div>
            ))}
        </div>
    )
}
