import React from "react";

export default function Inputs(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    // Retorna o meu componente completo
    return (
        <section className="flex inputs--container">
            <div className="flex inputs--input---subcontainer">
                    <input onChange={handleChange} name="topText" placeholder="Top text" id="input1"type="text"/>
                    <input onChange={handleChange} name="bottomText" placeholder="Bottom text" id="input2" type="text"/>
            </div>
            <button onClick={getMemeImage} >Get a new meme image  🖼</button>
            <div className="flex input--meme---subcontainer">
                <p className="top-input input--image---text">{meme.topText}</p>
                <img className="inputs--meme" src={meme.randomImage} alt="meme image"/>
                <p className="bottom-input input--image---text">{meme.bottomText}</p>
            </div>
        </section>
    )
}
