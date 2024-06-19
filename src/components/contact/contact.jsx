import React from "react";
import "./contact.css";

export default function Contact() {
    return (
        <div id="containerContact">
            <div className="screen">
                <div className="screen-header flex justify-between items-center">
                    <div className="flex space-x-2 text-red-500">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p className="text-sm">bash</p>
                </div>
                <div className="screen-body">
                    <div className="screen-body-item left">
                    <div className="app-title">
                        <span>Contactez-moi</span>
                    </div>
                    </div>
                    <div className="screen-body-item">
                    <div className="app-form">
                        <div className="app-form-group">
                        <input className="app-form-control" placeholder="PRENOM"/>
                        </div>
                        <div className="app-form-group">
                        <input className="app-form-control" placeholder="NOM"/>
                        </div>
                        <div className="app-form-group">
                        <input className="app-form-control" placeholder="EMAIL"/>
                        </div>
                        <div className="app-form-group message">
                        <input className="app-form-control" placeholder="MESSAGE"/>
                        </div>
                        <div className="app-form-group buttons">
                        <button className="app-form-button">Envoyer</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}