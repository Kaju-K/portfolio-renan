import "./GalleryButton.css"

function GalleryButton( { category, onClickFilter } ) {
    // checar se pageFilter.includes("._" + categoria.toLower...) no onClick
    // se sim: tira do filter
    // se não: bota
    const categoryFilter = "._" + category.trim().toLowerCase().replace(/ /g, "-")


    return (
        <button onClick={() => onClickFilter(categoryFilter)} className="gallery-button" data-toggle={ categoryFilter }>
            {category}
        </button>
    )
}

export default GalleryButton
