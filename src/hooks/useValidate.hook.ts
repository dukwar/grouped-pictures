import {useCallback} from "react";

// custom hook useValidate

export const useValidate = () => {

    const isValidNums = useCallback((str: string) => {
        const regExp = /^[a-z]+$/i
        const newStr = str.replace(/\s/g, '').split(',').filter((str) => str !== '')
        return newStr.some((str) => !regExp.test(str))

    }, [])

    const getValidHttpArray = useCallback((str: string) => {
       return str.replace(/\s/g, '').split(',').filter((str) => str !== '')
    }, [])

    return {getValidHttpArray, isValidNums}
}