import { Link } from "react-router-dom"
import "./Work.css"

function Work({work, regexSpecialCharacters}) {
    const nameClass = "video _" + work.tags.map( category => category.replace(/ /g, "-")).join(' _').toLowerCase()
    const srcVideo = work.video.replace("projeto", "mp4projeto")
    const workUrl = work.title.toLowerCase().replace(regexSpecialCharacters, "").replace(/ /g, "_")

    return (
        <Link to={workUrl} className={ nameClass }>
            <div className="video-hover">
                <h3>{ work.title }</h3>
                <h4>{ work.client } - { work.year }</h4>
            </div>
            <video muted autoPlay loop playsInline poster={work.firstSrc}>
                <source src={srcVideo}></source>
            </video>
        </Link>
    )
}

export default Work