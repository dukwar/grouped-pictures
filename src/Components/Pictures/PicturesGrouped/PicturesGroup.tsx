import {useTypesSelector} from "../../../hooks/useTypesSelector..hook";
import PictureCategory from "./PictureCategory";


function PicturesGroup() {

    const pictures = useTypesSelector(({picturesGrouped}) => picturesGrouped.pictures)
    const categoryPictures = Object.entries(pictures)

    return (
      <>
          {categoryPictures.map((item) => {
              return <PictureCategory title={item[0]} pictures={item[1].items}/>
          })}
      </>



    )
}

export default PicturesGroup