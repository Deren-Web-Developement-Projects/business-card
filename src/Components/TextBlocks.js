import React from "react";
import "../styles.css";

export default function TextBlocks() {
    return (
        <>
            <div id="about-block" className="text-block">
                <p className="sec-header">About</p>
                <p className="sec-body">
                    Hello there, I am Deren. I am a 
                    graduate student studying to become
                    a Web Developer. I am currently 
                    learning the frontend framework React.
                    I plan on learning Express next and
                    eventually complete the MERN stack.
                </p>
            </div>
            <div id="interest-block" className="text-block">
                <p className="sec-header">Interests</p>
                <p className="sec-body">
                    I like to play video games and
                    cook. In my spare time I learn
                    about Unreal Engine game 
                    development and Blender modeling. 
                    One day I would like to release 
                    my own game on Steam.
                </p>
            </div>
            <div id="icons-block" className="text-block">
                <p className="sec-header">Icons by:</p>
                <p className="sec-body">Website: 
                    <a target="_blank" href="https://icons8.com">Icons8</a>
                </p>
            </div>
        </>
    );
}