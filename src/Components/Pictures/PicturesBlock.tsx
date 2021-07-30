import {picturesBlockType} from "./types";
import PictureItem from "./PictureItem";
import React from "react";


const PicturesBlock = React.memo(({pictureBlock}: picturesBlockType) => {


    return (
        <>
            {pictureBlock.length > 0 && <section className="pictureBlock">
                <div className="pictureBlock__inner">
                    {pictureBlock.map(({img, tag}) => {
                        return <div key={`${img}-${tag}`} className="pictureBlock__img"><PictureItem picture={img} tag={tag}/></div>
                    })}
                </div>
            </section>
            }
        </>
    )
})

export default PicturesBlock