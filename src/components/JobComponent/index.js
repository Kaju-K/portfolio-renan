import { useParams } from "react-router-dom"
import "./JobComponent.css"

function JobComponent( { works, regexSpecialCharacters } ) {
    const params = useParams()
    const jobTitle = params.jobTitle

    const validUrl = works.filter( work => work.title.toLowerCase().replace(regexSpecialCharacters, "").replace(/ /g, "_") === jobTitle)

    if (!validUrl.length) {
        throw new Error("page doesn't exist")
    }

    return (
        <>
            { validUrl.map( (filteredWork, index) => {
            return (
                <section className="job-page" key={index}>
                    <h2 className="job-title">{ filteredWork.title.toUpperCase() }</h2>
                    <h3 className="job-client">{ filteredWork.client } - { filteredWork.year }</h3>
                    <div className="job-tags">{ filteredWork.tags.map( (tag, index) => {
                        return (
                            <h4 key={index}>{ tag }</h4>
                        )
                    })}</div>
                    <div className="job-description" dangerouslySetInnerHTML={{__html: filteredWork.description}}></div>
                </section>
            )
            }) }
        </>
    )
}

export default JobComponent
