import * as picturesActionCreators from "../redux/actions/pictures"
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

export const usePicturesActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(picturesActionCreators, dispatch)
}