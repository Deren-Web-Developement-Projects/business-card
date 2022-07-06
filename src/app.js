import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Photo from "./Components/Photo.js";
import Title from "./Components/Title.js";
import Buttons from "./Components/Buttons.js";
import TextBlocks from "./Components/TextBlocks";
import Footer from "./Components/Footer";

export default function App() {
    return (
        <div id="background">
            <div id="card">
                <Photo />
                <Title />
                <Buttons />
                <TextBlocks />
                <Footer />
            </div>
        </div>
    );
}