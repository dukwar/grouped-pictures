import {categoryType} from "./types";
import PictureItem from "../PictureItem";
import React from "react";


const PictureCategory = React.memo(({title, pictures}:categoryType) => {

    return (
        <section className="category">
            <div className="category__title">
                <h1>{title}</h1>
            </div>
            <div className="category__inner">
                {pictures && pictures.map((item, index) => {
                    return <div key={`${item}-${index}`} className="category__img"><PictureItem picture={item} tag={title}/></div>
                })}
            </div>
        </section>
    )
})

export default PictureCategory