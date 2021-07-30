import * as picturesActionCreators from "../redux/actions/pictures"
import * as assortActionCreators from "../redux/actions/assort"
import * as messageActionCreators from "../redux/actions/message"
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

// creating custom hooks for easier access to actions

export const usePicturesActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(picturesActionCreators, dispatch)
}

export const useAssortActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(assortActionCreators, dispatch)
}

export const useMessageActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(messageActionCreators, dispatch)
}