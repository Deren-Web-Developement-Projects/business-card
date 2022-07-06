import React from "react";
import "../styles.css";
import image from "../images/profile-picture.jpg";

export default function Photo() {
    return (
        <div id="photo">
            <img 
                src={image}
                alt="Profile Picture"
                id="profilePicture"
            />
        </div>
    );
}