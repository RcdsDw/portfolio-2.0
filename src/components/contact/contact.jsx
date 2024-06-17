import React from "react";
import "./contact.css";

export default function Contact() {
    return (
        <div class="containerContact">
            <div class="screen">
                <div class="screen-header flex justify-between items-center">
                    <div class="flex space-x-2 text-red-500">
                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <p class="text-sm">bash</p>
                </div>
                <div class="screen-body">
                    <div class="screen-body-item left">
                    <div class="app-title">
                        <span>Contactez-moi</span>
                    </div>
                    </div>
                    <div class="screen-body-item">
                    <div class="app-form">
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="PRENOM"/>
                        </div>
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="NOM"/>
                        </div>
                        <div class="app-form-group">
                        <input class="app-form-control" placeholder="EMAIL"/>
                        </div>
                        <div class="app-form-group message">
                        <input class="app-form-control" placeholder="MESSAGE"/>
                        </div>
                        <div class="app-form-group buttons">
                        <button class="app-form-button">Envoyer</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}