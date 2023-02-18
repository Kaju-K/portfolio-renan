import { useEffect } from "react";
import mixitup from 'mixitup'
import "./Gallery.css"
import Work from "../Work";
import GalleryButton from "../GalleryButton";

function Gallery( { works, regexSpecialCharacters} ) {
    const categoriesSet = new Set()
    for (let i=0; i < works.length; i++) {
        works[i].tags.forEach(category => {
            categoriesSet.add(category)
        });
    }
    const categories = [...categoriesSet].sort()

    useEffect(() => {
        mixitup(".videos", {
          selectors: {
            target: ".video",
          },
          controls: {
            toggleLogic: "or",
          },
          animation: {
            effects: 'fade translateX(-100px)',
            duration: 500,
          }
        });
    }, []);

    return (
        <div className="gallery" id="gallery">
            <div className="gallery-buttons-wrapper">
                <button
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