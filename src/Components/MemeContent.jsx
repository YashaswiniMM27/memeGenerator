import {useState, useEffect} from "react"

export default function MemeContent(){

    const [meme, setMeme] = useState({
        imgUrl:"/src/assets/memeEg.jpg",
        topText: "There was a spider",
        bottomText: "It's gone now"
    })

    const [allMemes, setAllMemes] = useState([])

    function handleChange(event){
        const {value, name} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    return(
        <section className="memeContent">
            <section className="InputSection">
                <div className="topText">
                    <span>Top Text</span>
                    <input name="topText" type="text" placeholder={`eg. ${meme.topText}`} onChange={handleChange} />
                </div>
                <div className="bottomText">
                    <span>Bottom Text</span>
                    <input name="bottomText" type="text" placeholder={`eg. ${meme.bottomText}` } onChange={handleChange} />
                </div>
            </section>
            <button className="getMemeBtn">Get a new meme image <img src="/src/assets/memeButton.png" alt="memeButton Image" /></button>
            <section className="meme">
                <img className="memeImg" src={meme.imgUrl} alt="memeImg" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </section>
        </section>
    )
}