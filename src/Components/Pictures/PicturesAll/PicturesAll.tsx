import {useTypesSelector} from "../../../hooks/useTypesSelector..hook";
import PictureBlock from "./PictureBlock";


function PicturesAll() {

    const allPictures = useTypesSelector(({picturesAll}) => picturesAll.pictures)

    return (
        <section className="allPictures">
            <div className="container">
                <div className="allPictures__inner">
                    {allPictures.map((item) => {
                        return <PictureBlock pictures={item}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default PicturesAll