import React, {useState} from "react";
import classNames from "classnames";
import {Search} from "./Sprites";
import Button from "./Button";
import {useRequest} from "../hooks/useRequest.hook";
import {FormikErrors, useFormik} from "formik";
import {useValidate} from "../hooks/useValidate.hook";
import {Values} from "./types";



function Form() {

    const [borderForm, setBorderForm] = useState(false)
    const handleSetBorder = () => setBorderForm(true)
    const handleDeleteBorder = () => setBorderForm(false)

    const {request} = useRequest()
    const {getValidHttpArray, isValidNums} = useValidate()



    const formik = useFormik({
        initialValues: {
            search: '',
        },

        validate({search}:Values) {
            const errors:FormikErrors<Values> = {}

            if (!search) {
                errors.search = 'Required'
            } else if (isValidNums(search)) {
                errors.search = 'an invalid number is entered'
            }

            return errors
        },


        onSubmit: ({search}:Values) => {
            const linesId = getValidHttpArray(search)

        }
    })

    const hasError = formik.touched && formik.errors.search

    const classes = classNames(
        '',
        {border: borderForm},
        {border__error: hasError}

    )


    return (
        <>
            <form className={classes} onSubmit={formik.handleSubmit}>
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
                <Button className="button--search">Загрузить</Button>
            </form>
            {hasError && <div className="header__error">{formik.errors.search}</div> }
            <div className="button__group">
                <Button className="button__clear"><p>Очистить</p></Button>
                <Button className="button__grouped"><p>Группировать</p></Button>
            </div>




        </>
    );
}

export default Form