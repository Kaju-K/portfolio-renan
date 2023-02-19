import "./JobPreview.css"

function JobPreview( { filteredWork } ) {
    const jobImages = filteredWork.images
    const jobsYoutube = jobImages.filter(image => "youtube" in image)
    const jobsVideos = jobImages.filter(image => "video" in image)
    const jobsImages = jobImages.filter(image => "image" in image)

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
                        <h4 className="job-video-title">{ link.title }</h4>
                        <video muted autoPlay loop playsInline className="job-video-preview">
                            <source src={link.video.replace("imagem", "mp4imagem")}></source>
                        </video>
                    </div>
                )
            })}
            { jobsImages.map( (link, index) => {
                return (
                    <div key={index} className="job-image-container">
                        <h4 className="job-image-title">{ link.title }</h4>
                        <img src={link.image} alt={link.title} className="job-image-preview"></img>
                    </div>
                )
            })}
        </div>
    )
}

export default JobPreview
