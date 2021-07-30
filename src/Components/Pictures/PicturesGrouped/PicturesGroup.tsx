import {useTypesSelector} from "../../../hooks/useTypesSelector.hook";
import PictureCategory from "./PictureCategory";


function PicturesGroup() {

    const pictures = useTypesSelector(({picturesGrouped}) => picturesGrouped && Object.entries(picturesGrouped.pictures))

    return (
      <>
          {pictures && pictures.map((item, index) => {
              return <PictureCategory key={`${item}-${index}`} title={item[0]} pictures={item[1].items}/>
          })}
      </>
    )
}

export default PicturesGroup