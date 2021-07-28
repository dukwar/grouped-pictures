import {useTypesSelector} from "../../../hooks/useTypesSelector..hook";
import {picturesBlockType} from "../types";


function Picture({pictures}: picturesBlockType) {

    const allPictures = useTypesSelector(({picturesAll}) => picturesAll.pictures)

    return (
        <section className="picture">
            <div className="picture__inner">
                {pictures.map((item) => {
                    return <img src={item} alt=""/>
                })}
            </div>
        </section>
    )
}

export default Picture