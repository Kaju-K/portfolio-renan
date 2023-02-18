import "./GalleryButton.css"

function GalleryButton( {category, onClick} ) {
    return (
        <button onClick={onClick} className="gallery-button" data-toggle={ "._" + category.toLowerCase().replace(/ /g, "-")} data-math="add">
            {category}
        </button>
    )
}

export default GalleryButton
