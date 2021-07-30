import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {Search} from "./Sprites";
import Button from "./Button";
import {useRequest} from "../hooks/useRequest.hook";
import {FormikErrors, useFormik} from "formik";
import {useValidate} from "../hooks/useValidate.hook";
import {Values} from "./types";
import {useAssortActions, usePicturesActions} from "../hooks/useActions.hook";
import {useTypesSelector} from "../hooks/useTypesSelector.hook";


function Form() {

    const {setGrouped} = useAssortActions()
    const {getPictures} = usePicturesActions()
    const {grouped, inputText} = useTypesSelector(({assort}) => assort)
    const {isFetching} = useTypesSelector(({picturesGrouped}) => picturesGrouped)

    const [borderForm, setBorderForm] = useState(false)
    const handleSetBorder = () => setBorderForm(true)
    const handleDeleteBorder = () => setBorderForm(false)

    const handleGrouped = () => {
        setGrouped()
    }
    const handleReset = () => {
        formik.resetForm({values: {search: ''}})
    }

    const {request} = useRequest()
    const {getValidHttpArray, isValidNums} = useValidate()


    const formik = useFormik({
        initialValues: {
            search: '',
        },

        validate({search}: Values) {
            const errors: FormikErrors<Values> = {}

            if (!search) {
                errors.search = 'Required'
            } else if (isValidNums(search)) {
                errors.search = 'Invalid value entered'
            }

            return errors
        },

        onSubmit: ({search}: Values) => {
            const tagsArr = getValidHttpArray(search)
            getPictures(request, tagsArr)
        }
    })

    const hasError = formik.touched && formik.errors.search

    useEffect(() => {
        formik.resetForm({values: {search: inputText}})
    }, [inputText])


    const classes = classNames(
        '',
        {border: borderForm},
        {border__error: hasError}
    )

    return (
        <>
            <form className={classes}>
                <input
                    id="search"
                    name="search"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.search}
                    autoComplete="off"
                    onFocus={handleSetBorder}
                    onBlur={handleDeleteBorder}
                />
                <div className="search__logo">
                    <Search className="search"/>
                </div>

                {!formik.values.search && <label htmlFor="search">Calculate...</label>}

            </form>
            {hasError && <div className="header__error">{formik.errors.search}</div>}
            <div className="button__group">
                <Button onClick={handleReset} className="button__clear"><p>Очистить</p></Button>
                <Button onClick={handleGrouped} className="button__grouped">
                    <p>{!grouped ? 'Группировать' : 'Разгруппировать'}</p></Button>
                <Button className="button" onClick={formik.handleSubmit} disabled={isFetching}><p>{isFetching ? 'Загрузка...' : 'Поиск'}</p></Button>
            </div>
        </>
    );
}

export default Form