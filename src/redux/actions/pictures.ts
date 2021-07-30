import {SET_FETCHING, SET_PICTURES_ALL, SET_PICTURES_GROUP} from "../constants";
import {Dispatch} from "redux";
import {picturesActionType} from "./types";
import {allPicturesType, picturePromiseType} from "../reducers/types";
import {setMessage} from "./message";

export const setPicturesGroup = (pictures: string, tag: string): picturesActionType => {
    return {
        type: SET_PICTURES_GROUP,
        payload: pictures,
        tag: tag
    }
}

export const setPicturesAll = (pictures: allPicturesType[]): picturesActionType => {
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

// 1. using redux-thunk to send the request
// 2. we accept an array of tags and a function for sending a request
// 3. next, we create an array of requests and pass it to Promise.all
// 4. then we process each response through a loop, while creating an indicator of the current index
// 5. If we do not receive a picture in the response, then we process it with the "SetMessage" action and a pop-up notification is displayed
// 6. for the correct work of "SetMessage" we are waiting for a promise
// 7. collect the object from tags and add gifs there (SetPictureGroup)
// 8. the next action fills the block of pictures - a composite picture
// 9. remove unnecessary elements in the array

export const getPictures = (request: (url: string) => Promise<picturePromiseType | undefined>, tags: string[]) => async (dispatch: Dispatch<picturesActionType>) => {

    dispatch(setFetching(true))

    try {
        let requests = tags.map(tag => request(`https://api.giphy.com/v1/gifs/random?api_key=gTJAO48YcpmrADUyo4opy4ES4g7iDBxx&tag=${tag}`))
        Promise.all(requests)
            .then(async (responses) => {
                let i = 0
                for (let res of responses) {
                    if (!res?.data.image_url) {
                        await new Promise(resolve => setTimeout(resolve, 2000 * i))
                        await dispatch(setMessage(true, `По этому тегу "${tags[i]}" ничего не найдено!`))
                    }
                    if (res && res.data.image_url) {
                        dispatch(setPicturesGroup(res.data.image_url, tags[i]))
                    }
                    i++
                }

                const images = responses.map((res, index) => {
                    if (res && res.data.image_url) {
                        return {
                            img: res?.data.image_url,
                            tag: tags[index]
                        }
                    }
                    return null
                }).filter((item) => item !== null) as allPicturesType[]

                dispatch(setPicturesAll(images))

            })
            .catch((e) => {
                console.log(e.message)
            })
    } catch (e) {
        console.log(e.message)
    }
    setTimeout(() => {
        dispatch(setFetching(false))
    }, 1000)

}