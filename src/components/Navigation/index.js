import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    const [cssNav, setCssNav] = useState({})
    const navPages = [
        {
            link: "work",
            path: "/"
        },
        {
            link: "demoreel",
            path: "/demoreel"
        },
        {
            link: "about me",
            path: "/about"
        },
        {
            link: "contact",
            path: "/contact"
        },
        
    ]

    useEffect(() => {
        function scrollingPage() {
            let backgroundCssNav = {...cssNav}
            if (!window.scrollY) {
                backgroundCssNav.background = "transparent"
            } else {
                backgroundCssNav.background = "#0D0D0D"
            }
            setCssNav(backgroundCssNav)
        }
        window.addEventListener("scroll", scrollingPage)
        return () => {window.removeEventListener("scroll", scrollingPage)}
      })

    return (
        <nav className="navigation" style={ cssNav }>
            <Link to="/" className="navigation-logo">
                <img src="img/renan-logo.png" alt="Logo Renan" className="navigation-logo"/>
            </Link>
            <div className="navigation-tags">
                {navPages.map((navPage, index) => <Link to={navPage.path} key={index} className={`navigation-${navPage.link}`}>{ navPage.link }</Link>)}
            </div>
        </nav>
    )
}

export default Navigation