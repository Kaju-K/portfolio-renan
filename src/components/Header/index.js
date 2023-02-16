import "./Header.css"
import { BiChevronDownCircle } from "react-icons/bi"

function Header() {
    return (
        <header>
            <section className="header-section">
                <video autoPlay muted loop playsInline>
                    <source src="https://renankogut.com/images/videoFundoReel_02_small.mp4" type="video/mp4"></source>
                </video>
                
                <div className="header-title">
                    <img src="img/renan-image-horizontal.png" alt="Renan Kogut" className="header-image" />
                    <h2 className="header-description">2D Animator | Motion designer</h2>
                </div>
                <a href="#gallery" className="header-arrow-down">
                    <BiChevronDownCircle size={"4rem"} />
                </a>
            </section>
        </header>
    )
}

export default Header
