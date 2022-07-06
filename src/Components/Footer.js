import React from "react";
import "../styles.css";
import gitLogo from "../images/logo-github.png";
import linkLogo from "../images/logo-linkedin.png";
import googLogo from "../images/logo-google.png";
import youLogo from "../images/logo-youtube.png";

export default function Footer() {
    return (
        <div id="footer">
            <div id="footer-box">
                <a target="_blank" href="https://github.com/DerenB">
                    <div id="img1" className="imageSquare">
                        <img 
                            src={gitLogo}
                            className="footer-logo"
                        />
                    </div>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/deren-bozer/">
                    <div id="img2" className="imageSquare">
                        <img 
                            src={linkLogo}
                            className="footer-logo"
                        />
                    </div>
                </a>
                <a target="_blank" href="https://www.google.com/">
                    <div id="img3" className="imageSquare">
                        <img 
                            src={googLogo}
                            className="footer-logo"
                        />
                    </div>
                </a>
                <a target="_blank" href="https://www.youtube.com/">
                    <div id="img4" className="imageSquare">
                        <img 
                            src={youLogo}
                            className="footer-logo"
                        />
                    </div>
                </a>
            </div>
        </div>
    );
}