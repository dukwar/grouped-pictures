import React from "react";
import PicturesBlock from "../Pictures/PicturesBlock";
import PicturesGroup from "../Pictures/PicturesGrouped/PicturesGroup";
import {useTypesSelector} from "../../hooks/useTypesSelector.hook";


function Home() {

    const grouped = useTypesSelector(({assort}) => assort.grouped)
    const allPictures = useTypesSelector(({picturesAll}) => picturesAll.pictures)

    return (
        <section className="home">
            <div className="container">
                <div className="home__inner">
                    {grouped
                        ?  <PicturesGroup />
                        :  allPictures && allPictures.map((pictureBlock, index) => <PicturesBlock key={`pictureBlock-${index}`} pictureBlock={pictureBlock} />)
                    }
                </div>
            </div>
        </section>
    )
}

export default Home