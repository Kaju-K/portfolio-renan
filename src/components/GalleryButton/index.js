import "./GalleryButton.css"

function GalleryButton( {category, regexSpace, onClick} ) {
    return (
        <button onClick={onClick} className="gallery-button" data-toggle={ "._" + category.toLowerCase().replace(regexSpace, "-")} data-math="add">
            {category}
        </button>
    )
}

export default GalleryButton
