import {SET_PICTURES_ALL} from "../constants";
import {picturesActionType} from "../actions/types";


const initialState = {
    pictures: [] as string[][],
}


type initialStateType = typeof initialState

const picturesAll = (state = initialState, action: picturesActionType): initialStateType => {

    switch (action.type) {

        case SET_PICTURES_ALL:

            const newItems = [...state.pictures, action.payload]

            return {
                ...state,
                pictures: newItems
            }

        default:
            return state
    }
}

export default picturesAll