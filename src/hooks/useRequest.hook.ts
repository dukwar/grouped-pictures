import {useCallback} from "react";
import axios from "axios";

// custom hook useRequest

export const useRequest = () => {

    const request = useCallback(async <T>(url:string):Promise<T | undefined> => {


        try {
            const res = await axios.get(url)
            return res.data
        } catch (e) {
            console.log(e.message)
        }

    }, [])

    return {request}
}