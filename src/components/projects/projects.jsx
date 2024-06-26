import React from "react";
import "./projects.css"
import datas from "../../projects.json"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    return (
        <div id="containerProjects">
            <div className="row">
                {datas.map((data, i) => (
                    <div className="col-1-of-3" key={i}>
                        <div className="card">
                            <div className="card__side card__side--front-1">
                            <div className="card__title card__title--1">
                                <i className="fas fa-paper-plane"></i>
                                <h4 className="card__heading">Basic</h4>
                            </div>
                
                            <div className="card__details">
                                <ul>
                                <li>1 Website</li>
                                <li>50 GB SSD Storage</li>
                                <li>Unmetered Bandwidth</li>
                                <li>Free SSL Certificate</li>
                                <li>1 Included Domain</li>
                                <li>1 Included Domain</li>
                                </ul>
                            </div>
                            </div>
                            <div className="card__side card__side--back card__side--back-1">
                            <div className="card__cta">
                                <div className="card__price-box">
                                <p className="card__price-only">Only</p>
                                <p className="card__price-value">$2.95/mo*</p>
                                </div>
                                <a href="#popup" className="btn btn--white">Select</a>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
