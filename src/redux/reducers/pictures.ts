import {SET_FETCHING, SET_PICTURES_GROUP} from "../constants";
import {picturesActionType} from "../actions/types";
import {picturesGroupType} from "./types";


const initialState = {
    pictures: {} as picturesGroupType,
    isFetching: false
}


type initialStateType = typeof initialState

const picturesGrouped = (state = initialState, action: picturesActionType): initialStateType => {

    switch (action.type) {

        case SET_PICTURES_GROUP:

            const newPictures = !state.pictures[action.tag]
                ? [action.payload]
                : [...state.pictures[action.tag].items, action.payload]

            const newItems = {
                ...state.pictures,
                [action.tag]: {
                    items: newPictures,
                }
            }

            return {
                ...state,
                pictures: newItems
            }

        case SET_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }

        default:
            return state
    }
}

export default picturesGrouped