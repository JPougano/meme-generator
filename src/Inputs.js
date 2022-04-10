import React from "react";
import Meme from "./memeData"

export default function Inputs(){

    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1b42wl.jpg");

        function changeMeme(){
            const memesArray = Meme.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)  
            const newImage = memesArray[randomNumber].url
            setMemeImage(newImage)
        }

    return (
        <section className="flex inputs--container">
            <div className="flex inputs--input---subcontainer">
                <input placeholder="Top text" id="input1"type="text"/>
                <input placeholder="Bottom text" id="input2" type="text"/>
            </div>
            <button onClick={changeMeme} >Get a new meme image  🖼</button>
            <img className="inputs--meme" src={memeImage} alt="meme image"/>
        </section>
    )
}

