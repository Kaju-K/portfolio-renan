import { useEffect } from "react";
import mixitup from 'mixitup'
import "./Gallery.css"
import Work from "../Work";
import GalleryButton from "../GalleryButton";
import { useSearchParams } from "react-router-dom";

function Gallery( { works, regexSpecialCharacters} ) {
    const [searchParams, setSearchParams] = useSearchParams()
    let listFilters = []
    let pageFilter = []

    const categoriesSet = new Set()
    for (let i=0; i < works.length; i++) {
        works[i].tags.forEach(category => {
            categoriesSet.add(category)
        });
    }

    const categories = [...categoriesSet].sort()

    categories.forEach( category => listFilters.push("._" + category.trim().toLowerCase().replace(/ /g, "-")))

    for (const [entry, value] of searchParams.entries()) {
        if (entry !== "filter") {
            continue
        }
        if ( !(listFilters.includes(value)) ) {
            continue
        }
        if ( pageFilter.includes(value) ) {
            continue
        }
        pageFilter.push(value)
    }

    useEffect(() => {
        mixitup(".videos", {
          selectors: {
            target: ".video",
          },
          controls: {
            toggleLogic: "and",
          },
          load: {
            filter: pageFilter.length ? pageFilter.join("") : "all",
          },
          animation: {
            effects: 'fade translateX(-100px)',
            duration: 500,
          }
        });
    }, [pageFilter]);

    function onClickFilter(categoryFilter) {
        let pageFilterCopy = pageFilter.slice()
        if (pageFilter.includes(categoryFilter)) {
            pageFilterCopy.splice(pageFilterCopy.indexOf(categoryFilter), 1)
            setSearchParams( {"filter": pageFilterCopy} )
        } else {
            pageFilterCopy.push(categoryFilter)
            setSearchParams( {"filter": pageFilterCopy} )
        }
    }

    return (
        <div className="gallery" id="gallery">
            <div className="gallery-buttons-wrapper">
                <button
                    onClick={ () => setSearchParams({}) }
                    className="gallery-button"
                    data-filter="all"
                >
                    All
                </button>
                { categories.map((category, index) => {
                    return (
                        <GalleryButton
                            category={category}
                            key={index}
                            onClickFilter={onClickFilter}
                        />
                    )
                }) }
            </div>
            <div className="videos">
                {works.map(work => {
                    return (
                        <Work 
                            work={ work } 
                            key={ work.id }
                            regexSpecialCharacters={regexSpecialCharacters}
                        />
                    ) 
                })}
            </div>
        </div>
    )
}

export default Gallery