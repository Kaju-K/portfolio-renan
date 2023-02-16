import "./Work.css"

function Work({ work, regexSpace }) {
    const nameClass = "video _" + work.tags.map( category => category.replace(regexSpace, "-")).join(' _').toLowerCase()
    const srcVideo = work.video.replace("projeto", "mp4projeto")

    return (
        <a href="/#" className={ nameClass }>
            <div className="video-hover">
                <h3>{ work.title }</h3>
                <h4>{ work.client } - { work.year }</h4>
            </div>
            <video muted autoPlay loop playsInline poster={work.firstSrc}>
                <source src={srcVideo}></source>
            </video>
        </a>
    )
}

export default Work