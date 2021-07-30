import {picturesItemType} from "./types";
import {useAssortActions} from "../../hooks/useActions.hook";


function PictureItem({picture, tag}: picturesItemType) {

    const {setInputText} = useAssortActions()
    const handleSetInputText = (text: string) => {
        setInputText(text)
    }

    return <img onClick={() => handleSetInputText(tag)} src={picture} alt=""/>
}

export default PictureItem