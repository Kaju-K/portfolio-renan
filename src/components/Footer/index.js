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
            <h4 className="footer-text">&#169; Copyright 2023. All Rights Reserved. Made by <a href="https://marcelokogut.com" target="_blank" rel="noreferrer">Marcelo Kogut</a></h4>
            <div className="footer-social-medias">
                <a href="https://twitter.com/kogut_r" target={"_blank"} rel={"noreferrer"} ><AiOutlineTwitter className="social-media" /></a>
                <a href="https://www.linkedin.com/in/renankogut/" target={"_blank"} rel={"noreferrer"}><AiFillLinkedin className="social-media" /></a>
                <a href="https://www.instagram.com/_kogut_r/" target={"_blank"} rel={"noreferrer"} ><AiOutlineInstagram className="social-media" /></a>
                <a href="https://www.youtube.com/c/kogut_r" target={"_blank"} rel={"noreferrer"} ><AiFillYoutube className="social-media" /></a>
            </div>
            <a href="#top" className="footer-arrow-up" style={cssArrowUp}>
                <BsArrowUpCircle size={"2.5rem"} />
            </a>
        </footer>
    )
}

export default Footer