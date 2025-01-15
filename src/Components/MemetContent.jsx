export default function MemeContent(){
    return(
        <section className="memeContent">
            <section className="InputSection">
                <div className="topText">
                    <span>Top Text</span>
                    <input type="text" placeholder="eg. There was a spider" />
                </div>
                <div className="bottomText">
                    <span>Bottom Text</span>
                    <input type="text" placeholder="eg. It's gone now" />
                </div>
            </section>
            <button className="getMemeBtn">Get a new meme image <img src="/src/assets/memeButton.png" alt="memeButton Image" /></button>
            <section className="meme">
                <img className="memeImg" src="/src/assets/memeEg.jpg" alt="memeImg" />
                {/* <span>There was a spider</span>
                <span>It's gone now</span> */}
            </section>
        </section>
    )
}