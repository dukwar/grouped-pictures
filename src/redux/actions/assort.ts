import {SET_GROUPED, SET_INPUT_TEXT} from "../constants";
import {groupedActionType} from "./types";

export const setGrouped = ():groupedActionType => {
    return {
        type: SET_GROUPED,
    }
}
export const setInputText = (text:string):groupedActionType => {
    return {
        type: SET_INPUT_TEXT,
        text: text
    }
}