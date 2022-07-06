import React from "react";
import "../styles.css";
import scrimlogo from "../images/logo-react.png";
import codeLogo from "../images/logo-code.png";

export default function Buttons() {
    return (
        <div id="button-block">
            <a target="_blank" href="https://scrimba.com/">
                <div className="button b1">
                    <img 
                        src={scrimlogo}
                        className="button-logo"
                        alt="Scrim Logo"
                    />
                    <p>Scrimba</p>
                </div>
            </a>
            <a target="_blank" href="https://www.codecademy.com/">
                <div className="button b2">
                    <img 
                        src={codeLogo}
                        className="button-logo"
                        alt="Code Logo"
                    />
                    Codecademy
                </div>
            </a>
        </div>
    );
}