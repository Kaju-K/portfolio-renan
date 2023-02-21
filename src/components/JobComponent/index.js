import { useParams } from "react-router-dom"
import JobNavigation from "../JobNavigation"
import JobPreview from "../JobPreview"
import "./JobComponent.css"

function JobComponent( { works, regexSpecialCharacters } ) {
    const params = useParams()
    const jobTitle = params.jobTitle

    const validWork = works.filter( work => work.title.toLowerCase().replace(regexSpecialCharacters, "").replace(/ /g, "_") === jobTitle)

    if (!validWork.length) {
        throw new Error("page doesn't exist")
    }

    const filteredWork = validWork[0]

    return (
        <section className="job-page">
            <div className="job-page-container">
                <h2 className="job-title">{ filteredWork.title.toUpperCase() }</h2>
                <h3 className="job-client">{ filteredWork.client } - { filteredWork.year }</h3>
                <div className="job-tags">{ filteredWork.tags.map( (tag, index) => {
                    return (
                        <h4 className="job-tag" key={index}>{ tag }</h4>
                    )
                })}</div>
                <div className="job-description" dangerouslySetInnerHTML={{__html: filteredWork.description}}></div>
                <JobPreview
                    filteredWork={filteredWork}
                />
                <JobNavigation
                    works={works}
                    filteredWork={filteredWork}
                    regexSpecialCharacters={regexSpecialCharacters}
                />
            </div>
        </section>
    )
}

export default JobComponent
