import {SET_GROUPED, SET_INPUT_TEXT} from "../constants";
import {groupedActionType} from "../actions/types";

const initialState = {
    grouped: false,
    inputText: ''
}

type initialStateType = typeof initialState

const assort = (state = initialState, action: groupedActionType): initialStateType => {

    switch (action.type) {

        case SET_GROUPED:

            return {
                ...state,
                grouped: !state.grouped
            }

        case SET_INPUT_TEXT:

            return {
                ...state,
                inputText: action.text
            }

        default:
            return state
    }
}

export default assort