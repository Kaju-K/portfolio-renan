import Gallery from "../components/Gallery"
import Header from "../components/Header"
import works from "../data/jobs.json"

function Root() {
    return (
        <>
            <Header />
            <Gallery works={works} />
        </>
    )
}

export default Root