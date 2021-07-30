import React from "react";
import {LineLogo} from "./Sprites";
import Form from "./Form";

function Header() {

    return (
        <>
            <section className="header">
                <div className="container">
                    <div className="header__inner">
                        <div className="header__logo">
                            <LineLogo className="logo"/>
                            <span><h1>Pictures</h1></span>
                        </div>
                        <div className="header__data">

                            <div className="header__search">
                                <Form />
                            </div>
                            <div className="header__info">
                                <p>Enter tags through "," </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header