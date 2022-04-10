import React from "react";
import Troll from "./images/Troll.png"

export default function Header(){
    return (
        <nav className="flex header--container">
            <div className="flex header--subcontainer">
                <img className="header--troll" src={Troll} alt="Icon da página"/>
                <p className="header--title">Meme Generator</p>
            </div>
            <p className="header--description">React Course - Project 3</p>
        </nav>
    )
}