import {SET_MESSAGE} from "../constants";
import {messageActionType} from "./types";

export const setMessage = (isOpen:boolean, text:string):messageActionType => {
    return {
        type: SET_MESSAGE,
        payload: {
            isOpen: isOpen,
            text: text
        }
    }
}