import {useCallback} from "react";
import axios from "axios";
import {useMessageActions} from "./useActions.hook";

// custom hook useRequest

export const useRequest = () => {

    const {setMessage} = useMessageActions()

    const request = useCallback(async <T>(url: string): Promise<T | undefined> => {

        try {
            const res = await axios.get(url)
            return res.data
        } catch (e) {
            setMessage(true, e.message)
            return Promise.reject()
        }
    }, [])
    return {request}
}