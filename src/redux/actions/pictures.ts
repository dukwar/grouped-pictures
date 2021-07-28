import {SET_FETCHING, SET_PICTURES_ALL, SET_PICTURES_GROUP} from "../constants";
import {Dispatch} from "redux";
import {picturesActionType} from "./types";
import {picturePromiseType} from "../reducers/types";

export const setPicturesGroup = (pictures: string, tag:string): picturesActionType => {
    return {
        type: SET_PICTURES_GROUP,
        payload: pictures,
        tag: tag
    }
}

export const setPicturesAll = (pictures: string[]): picturesActionType => {
    return {
        type: SET_PICTURES_ALL,
        payload: pictures,

    }
}

export const setFetching = (data: boolean): picturesActionType => {
    return {
        type: SET_FETCHING,
        payload: data
    }
}

export const getPictures = (request: (url: string) => Promise<picturePromiseType | undefined>, tags:string[]) => async (dispatch: Dispatch<picturesActionType>) => {

    dispatch(setFetching(true))

        try {
            let requests = tags.map(tag => request(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`))
            Promise.all(requests)
                .then((responses) => {
                    const images = responses.map((item) => item?.data.image_url) as string[]
                    dispatch(setPicturesAll(images))
                    // console.log(images)
                    responses.forEach((res, index) => {
                        if (res) {
                            dispatch(setPicturesGroup(res.data.image_url, tags[index]))

                        }
                    })
                })

            // const res = await request(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=cat`)
            // if (!res) {
            //     throw new Error(`something wrong`)
            // }
            // dispatch(setPictures(res, tag))

        } catch (e) {
            console.log(e.message)
        }

    dispatch(setFetching(false))

}