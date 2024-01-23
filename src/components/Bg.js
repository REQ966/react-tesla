import "./Bg.css"

export default function Bg({img, car}){

    return(
        <section className="item " style={{backgroundImage: `url(${img})`}}>
            <div className="container">
            <div>
                <h1 className="item-text">{car}</h1>
            </div>
            <div className="item-buttons">
                <button >Egyedi megrendelés</button>
                <button >Raktárkészlet</button>
            </div>
            </div>
        </section>
    )
}