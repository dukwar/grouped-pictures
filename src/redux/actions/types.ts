import {SET_PICTURES_GROUP, SET_FETCHING, SET_PICTURES_ALL} from "../constants";

// pictures

interface setPicturesGroupType {
    type: typeof SET_PICTURES_GROUP,
    payload: string,
    tag: string
}

interface setPicturesAllType {
    type: typeof SET_PICTURES_ALL,
    payload: string[],
}

interface setFetchingType {
    type: typeof SET_FETCHING,
    payload: boolean
}


export type picturesActionType = setFetchingType | setPicturesGroupType | setPicturesAllType