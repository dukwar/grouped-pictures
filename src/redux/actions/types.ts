import {
    SET_PICTURES_GROUP,
    SET_FETCHING,
    SET_PICTURES_ALL,
    SET_GROUPED,
    SET_INPUT_TEXT,
    SET_MESSAGE
} from "../constants";
import {allPicturesType} from "../reducers/types";

// message

interface setMessageType {
    type: typeof SET_MESSAGE
    payload: {
        isOpen: boolean,
        text: string
    }
}

export type messageActionType = setMessageType


// pictures

interface setPicturesGroupType {
    type: typeof SET_PICTURES_GROUP,
    payload: string,
    tag: string
}

interface setPicturesAllType {
    type: typeof SET_PICTURES_ALL,
    payload: allPicturesType[],
}

interface setFetchingType {
    type: typeof SET_FETCHING,
    payload: boolean
}

export type picturesActionType = setFetchingType | setPicturesGroupType | setPicturesAllType | setMessageType

// assort

interface setGroupedType {
    type: typeof SET_GROUPED
}

interface setInputType {
    type: typeof SET_INPUT_TEXT,
    text: string
}

export type groupedActionType = setGroupedType | setInputType





