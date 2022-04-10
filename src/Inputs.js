import React from "react";
import Meme from "./memeData"

export default function Inputs(){

    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/1b42wl.jpg");
    // Gera um meme aleatório dentro da nossa coleção de memes
        function changeMeme(){
            const memesArray = Meme.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)  
            const newImage = memesArray[randomNumber].url
            setMemeImage(newImage)
        }
    // Cria os textos que irão acima e abaixo do meme
    const [memeText, setMemeText] = React.useState({
        topText: "",
        bottomText: ""
    })

    // Altera o state que contém o texto de cima do meme
    function changesTopText(){
        setMemeText(prevText => {
            return {
                ...prevText,
                topText: document.getElementById("input1").value
            }
        })
    }

    // Altera o state que contém o texto de baixo do meme
    function changesBottomText(){
        setMemeText(prevText => {
            return {
                ...prevText,
                bottomText: document.getElementById("input2").value
            }
        })
    }

    // Retorna o meu componente completo
    return (
        <section className="flex inputs--container">
            <div className="flex inputs--input---subcontainer">
                <input onKeyUp={changesTopText}  placeholder="Top text" id="input1"type="text"/>
                <input onKeyUp={changesBottomText} placeholder="Bottom text" id="input2" type="text"/>
            </div>
            <button onClick={changeMeme} >Get a new meme image  🖼</button>
            <div className="flex input--meme---subcontainer">
                <p className="top-input input--image---text">{memeText.topText}</p>
                <img className="inputs--meme" src={memeImage} alt="meme image"/>
                <p className="bottom-input input--image---text">{memeText.bottomText}</p>
            </div>
        </section>
    )
}

