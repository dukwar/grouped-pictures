import React from "react";
import {useTypesSelector} from "../hooks/useTypesSelector.hook";
import {useMessageActions} from "../hooks/useActions.hook";



function Message() {

    const {setMessage} = useMessageActions()
    const {isOpen, messageText} = useTypesSelector(({message}) => message)

    if (isOpen) {
        setTimeout(() => {
            setMessage(false, '')
        }, 1500)
    }
    return (
        <>
            <section className={isOpen ? "message active" : "message"}>
                <div className="message__inner">
                    <h3>{messageText}</h3>
                </div>
            </section>
        </>
    )
}

export default Message