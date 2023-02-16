import "./Footer.css"
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai"
import { BsArrowUpCircle } from "react-icons/bs"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Footer() {
    const [cssArrowUp, setCssArrowUp] = useState({})

    useEffect(() => {
        function scrollingPage() {
            let displayCssArrowUp = {...cssArrowUp}
            if (!window.scrollY) {
                displayCssArrowUp.display = "none"
            } else {
                displayCssArrowUp.display = "inline-block"
            }
            setCssArrowUp(displayCssArrowUp)
        }
        window.addEventListener("scroll", scrollingPage)
        return () => {window.removeEventListener("scroll", scrollingPage)}
      })

    return (
        <footer>
            <Link to="/">
                <img src="img/renan-image-horizontal.png" alt="Renan Kogut" className="footer-image"></img>
            </Link>
            <h4 className="footer-text">&#169; Copyright 2023. All Rights Reserved. Made by <a href="/#">Marcelo Kogut</a></h4>
            <div className="footer-social-medias">
                <a href="/#" ><AiOutlineTwitter className="social-media" /></a>
                <a href="/#" ><AiFillLinkedin className="social-media" /></a>
                <a href="/#" ><AiOutlineInstagram className="social-media" /></a>
                <a href="/#" ><AiFillYoutube className="social-media" /></a>
            </div>
            <a href="#top" className="footer-arrow-up" style={cssArrowUp}>
                <BsArrowUpCircle size={"2.5rem"} />
            </a>
        </footer>
    )
}

export default Footer