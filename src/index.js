import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import image from "./images/profile-picture.jpg";

function Main() {
    return (
        <>
            <div id="background">
                <div id="card">
                    <div id="photo">
                        <img 
                            src={image}
                        />
                    </div>
                    <div id="title-block">
                        <p>Deren Bozer</p>
                        <p>Frontend Developer</p>
                        <p>github.com/DerenB</p>
                    </div>
                    <div id="button-block">
                        <button>Email</button>
                        <button>LinkedIn</button>
                    </div>
                    <div id="about-block">
                        <p>About</p>
                        <p>
                        Soufflé lemon drops bear claw cookie 
                        toffee chocolate. Pudding cotton candy 
                        carrot cake gingerbread cupcake. 
                        Marshmallow cheesecake apple pie pie 
                        danish jelly beans gingerbread cookie 
                        jelly beans. Soufflé pie cheesecake 
                        sweet macaroon apple pie marzipan.
                        </p>
                    </div>
                    <div id="interest-block">
                        <p>Interests</p>
                        <p>
                        Cupcake ipsum dolor sit amet candy. 
                        Caramels sweet roll chupa chups donut 
                        shortbread marzipan pie jelly. Sugar 
                        plum chupa chups cupcake chocolate 
                        cake croissant.
                        </p>
                    </div>
                    <div id="icons-block">
                        <p>Icons by:</p>
                        <a target="_blank" href="https://icons8.com">Icons8</a>
                    </div>
                    <div id="footer">
                    
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