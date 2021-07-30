import {SET_MESSAGE} from "../constants";
import {messageActionType} from "../actions/types";

const initialState = {
    isOpen: false,
    messageText: ''
}

type initialStateType = typeof initialState

const message = (state = initialState, action: messageActionType): initialStateType => {

    switch (action.type) {

        case SET_MESSAGE:

            return {
                ...state,
                isOpen: action.payload.isOpen,
                messageText: action.payload.text
            }

        default:
            return state
    }
}

export default message