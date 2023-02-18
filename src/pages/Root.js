import Gallery from "../components/Gallery"
import Header from "../components/Header"
import works from "../data/jobs.json"

function Root( {regexSpecialCharacters} ) {
    return (
        <>
            <Header />
            <Gallery
                works={works}
                regexSpecialCharacters={regexSpecialCharacters}
            />
        </>
    )
}

export default Root