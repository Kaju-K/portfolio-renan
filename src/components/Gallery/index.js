import { useEffect } from "react";
import mixitup from 'mixitup'
import "./Gallery.css"
import Work from "../Work";
import GalleryButton from "../GalleryButton";

function Gallery({ works }) {
    const categoriesSet = new Set()
    for (let i=0; i < works.length; i++) {
        works[i].tags.forEach(category => {
            categoriesSet.add(category)
        });
    }
    const categories = [...categoriesSet].sort()

    const regexSpace = / /g;

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
            duration: 100
          }
        });
    }, []);

    let selectedFilters = 0

    function galleryButtonClick(event) {
        console.log(event)
        if (event.target.dataset.filter === undefined) {
            event.target.classList.toggle("gallery-button-pressed")
            if (event.target.dataset.math === "add") {
                event.target.dataset.math = "sub"
                selectedFilters += 1
                console.log(selectedFilters)
                event.target.parentNode.firstChild.classList.remove("gallery-button-pressed")
            } else if (event.target.dataset.math === "sub") {
                event.target.dataset.math = "add"
                selectedFilters -= 1
                if (!selectedFilters) {
                    event.target.parentNode.firstChild.classList.add("gallery-button-pressed")
                }
            }
        } else {
            event.target.classList.add("gallery-button-pressed")
            for (let i=1; i<event.target.parentNode.childNodes.length; i++) {
                event.target.parentNode.childNodes[i].classList.remove("gallery-button-pressed")
            }
            selectedFilters = 0
        }
    }



    return (
        <div className="gallery" id="gallery">
            <div className="gallery-buttons-wrapper">
                <button
                    className="gallery-button gallery-button-pressed"
                    data-filter="all"
                    onClick={galleryButtonClick}
                >
                    All
                </button>
                { categories.map((category, index) => {
                    return (
                        <GalleryButton
                            category={category}
                            regexSpace={regexSpace}
                            onClick={galleryButtonClick}
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
                            regexSpace={regexSpace}
                        />
                    ) 
                })}
            </div>
        </div>
    )
}

export default Gallery