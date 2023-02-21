import "./JobPreview.css"

function JobPreview( { filteredWork } ) {
    const jobMedia = filteredWork.images
    const jobsYoutube = jobMedia.filter(image => "youtube" in image)
    const jobsVideos = jobMedia.filter(image => "video" in image)
    const jobsImages = jobMedia.filter(image => "image" in image)
    const jobsLinkVideos = jobMedia.filter(image => "linkVideo" in image)

    return (
        <div className="job-preview">
            { jobsYoutube.map( (link, index) => {
                return (
                    <iframe key={index} src={`https://www.youtube.com/embed/${link.youtube}`} title="Frowzy Animation - Starting Soon" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                )
            }) }
            { jobsVideos.map( (link, index) => {
                return (
                    <div key={index} className="job-video-container">
                        <h4 className={"job-preview-title " + (link.title ? "" : "job-preview-title-deactiated")}>{ link.title }</h4>
                        <video muted autoPlay loop playsInline className="job-video-preview" src={link.video.replace("imagem", "mp4imagem")}>
                            <source src={link.video.replace("imagem", "mp4imagem")} type={"video/mp4"}></source>
                        </video>
                    </div>
                )
            })}
            { jobsImages.map( (link, index) => {
                return (
                    <div key={index} className="job-image-container">
                        <h4 className={"job-preview-title " + (link.title ? "" : "job-preview-title-deactiated")}>{ link.title }</h4>
                        <img src={link.image} alt={link.title} className="job-image-preview"></img>
                    </div>
                )
            })}
            { jobsLinkVideos.map( (link, index) => {
                return (
                    <div key={index} className="job-link-video-container">
                        <h4 className={"job-preview-title " + (link.title ? "" : "job-preview-title-deactiated")}>{ link.title }</h4>
                        <div dangerouslySetInnerHTML={{__html: link.text}} className={"job-preview-text " + (link.text ? "" : "job-preview-text-deactivated")}></div>
                        <iframe key={index} src={link.linkVideo} title="Frowzy Animation - Starting Soon" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                )
            })}
        </div>
    )
}

export default JobPreview
