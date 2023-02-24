import { Link } from "react-router-dom"
import "./Work.css"

function Work({work, regexSpecialCharacters}) {
    const nameClass = "video _" + work.tags.map( category => category.trim().replace(/ /g, "-")).join(' _').toLowerCase()
    const srcVideo = work.video.replace("projeto", "mp4projeto")
    const workUrl = work.title.toLowerCase().replace(regexSpecialCharacters, "").replace(/ /g, "_")

    return (
        <Link to={workUrl} className={ nameClass }>
            <div className="video-hover">
                <div className="hover-container">
                    <h3 className="hover-title">{ work.title }</h3>
                    <h4 className="hover-description">{ work.client } - { work.year }</h4>
                </div>
            </div>
            <video muted autoPlay loop playsInline poster={work.firstSrc} src={srcVideo}>
                <source src={srcVideo} type={"video/mp4"}></source>
            </video>
        </Link>
    )
}

export default Work