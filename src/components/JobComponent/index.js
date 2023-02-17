import { useParams } from "react-router-dom"
import "./JobComponent.css"

function JobComponent( {works} ) {
    const params = useParams()
    const jobTitle = params.jobTitle

    const regexSpecialCharacters = /["?]|\| /g
    
    for (let i = 0; i < works.length; i++) {
        let urlWork = works[i].title.toLowerCase().replace(regexSpecialCharacters, "").replace(/ /g, "_")
        if ( urlWork === jobTitle) {
            return (
                <section className="job-page">
                    { works[i].description }
                </section>
            )
        }
    }
    throw new Error("page not exist")

}

export default JobComponent
