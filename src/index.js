import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import image from "./images/profile-picture.jpg";
import scrimlogo from "./images/logo-react.png";
import codeLogo from "./images/logo-code.png";
import gitLogo from "./images/logo-github.png";
import linkLogo from "./images/logo-linkedin.png";
import googLogo from "./images/logo-google.png";
import youLogo from "./images/logo-youtube.png";

function Main() {
    return (
        <>
            <div id="background">
                <div id="card">
                    <div id="photo">
                        <img 
                            src={image}
                            alt="Profile Picture"
                            id="profilePicture"
                        />
                    </div>
                    <div id="title-block">
                        <p id="tb1">Deren Bozer</p>
                        <p id="tb2">Frontend Developer</p>
                        <p id="tb3">github.com/DerenB</p>
                    </div>
                    <div id="button-block">
                        <div className="button b1">
                            <img 
                                src={scrimlogo}
                                className="button-logo"
                            />
                            <p>Scrimba</p>
                        </div>
                        <div className="button b2">
                            <img 
                                src={codeLogo}
                                className="button-logo"
                            />
                            Codecademy
                        </div>
                    </div>
                    <div id="about-block" className="text-block">
                        <p className="sec-header">About</p>
                        <p className="sec-body">
                        Soufflé lemon drops bear claw cookie 
                        toffee chocolate. Pudding cotton candy 
                        carrot cake gingerbread cupcake. 
                        Marshmallow cheesecake apple pie pie 
                        danish jelly beans gingerbread cookie 
                        jelly beans. Soufflé pie cheesecake 
                        sweet macaroon apple pie marzipan.
                        </p>
                    </div>
                    <div id="interest-block" className="text-block">
                        <p className="sec-header">Interests</p>
                        <p className="sec-body">
                        Cupcake ipsum dolor sit amet candy. 
                        Caramels sweet roll chupa chups donut 
                        shortbread marzipan pie jelly. Sugar 
                        plum chupa chups cupcake chocolate 
                        cake croissant.
                        </p>
                    </div>
                    <div id="icons-block" className="text-block">
                        <p className="sec-header">Icons by:</p>
                        <p className="sec-body">Website: 
                            <a target="_blank" href="https://icons8.com">Icons8</a>
                        </p>
                    </div>
                    <div id="footer">
                        <div id="footer-box">
                            <div id="img1" className="imageSquare">
                                <img 
                                    src={gitLogo}
                                    className="footer-logo"
                                />
                            </div>
                            <div id="img2" className="imageSquare">
                                <img 
                                    src={linkLogo}
                                    className="footer-logo"
                                />
                            </div>
                            <div id="img3" className="imageSquare">
                                <img 
                                    src={googLogo}
                                    className="footer-logo"
                                />
                            </div>
                            <div id="img4" className="imageSquare">
                                <img 
                                    src={youLogo}
                                    className="footer-logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);