import {useState, useEffect} from "react"

export default function MemeContent(){

    const [meme, setMeme] = useState({
        imgUrl:"/src/assets/memeEg.jpg",
        topText: "",
        bottomText: ""
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


    function RandomMemeImg(){
        const random = Math.floor(Math.random() * allMemes.length)
        const randomMeme = allMemes[random]
        setMeme(prevMeme => ({
            ...prevMeme,
            imgUrl: randomMeme.url
        }))
    }

    return(
        <section className="memeContent">
            <section className="InputSection">
                <div className="topText">
                    <span>Top Text</span>
                    <input name="topText" type="text" placeholder={"eg. There was a spider"} onChange={handleChange} />
                </div>
                <div className="bottomText">
                    <span>Bottom Text</span>
                    <input name="bottomText" type="text" placeholder={"eg. It's gone now"} onChange={handleChange} />
                </div>
            </section>
            <button className="getMemeBtn" onClick={RandomMemeImg}>Get a new meme image <img src="/src/assets/memeButton.png" alt="memeButton Image" /></button>
            <section className="meme">
                <img className="memeImg" src={meme.imgUrl} alt="memeImg" />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </section>
        </section>
    )
}