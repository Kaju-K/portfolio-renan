import "./JobNavigation.css"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import { Link } from "react-router-dom"

function JobNavigation( { filteredWork, works, regexSpecialCharacters } ) {
    const nextVideo = works.filter( work => work.id === filteredWork.next )[0]
    const previousVideo = works.filter( work => work.id === filteredWork.previous )[0]
    let previousWorkUrl
    let nextWorkUrl

    if(previousVideo) {
        previousWorkUrl = previousVideo.title.toLowerCase().replace(regexSpecialCharacters, "").replace(/ /g, "_")
    } else {
        previousWorkUrl = null
    }

    if(nextVideo) {
        nextWorkUrl = nextVideo.title.toLowerCase().replace(regexSpecialCharacters, "").replace(/ /g, "_")
    } else {
        nextWorkUrl = null
    }

    return (
        <div className="job-navigation">
                { previousWorkUrl ? (
                    <Link to={`/${previousWorkUrl}`} className="navigation-previous navigation-activated" action="replace">
                            <video muted autoPlay loop playsInline poster={previousVideo.firstSrc} className="navigation-previous-video" src={previousVideo.video.replace("projeto", "mp4projeto")}>
                                <source src={previousVideo.video.replace("projeto", "mp4projeto")} type={"video/mp4"}></source>
                            </video>
                            <div>Previous</div>
                            <BsArrowLeftCircle size={"2.5rem"} />
                    </Link>
                ) : (
                    <div className="navigation-previous navigation-deactivated">
                        <div>Previous</div>
                        <BsArrowLeftCircle size={"2.5rem"} />
                    </div>
                )}
                { nextWorkUrl ? (
                    <Link to={`/${nextWorkUrl}`} className="navigation-previous navigation-activated">
                        <BsArrowRightCircle size={"2.5rem"} />
                        <div>Next</div>
                        <video muted autoPlay loop playsInline poster={nextVideo.firstSrc} className="navigation-previous-video" src={nextVideo.video.replace("projeto", "mp4projeto")}>
                            <source src={nextVideo.video.replace("projeto", "mp4projeto")}></source>
                        </video>
                    </Link>
                ) : (
                    <div className="navigation-previous navigation-deactivated">
                        <BsArrowRightCircle size={"2.5rem"} />
                        <div>Next</div>
                    </div>
                )}
        </div>
    )
}

export default JobNavigation
