import JobComponent from "../components/JobComponent"

function Job( {works, regexSpecialCharacters } ) {
    return <JobComponent
        works={works}
        regexSpecialCharacters={regexSpecialCharacters}
    />
}

export default Job
