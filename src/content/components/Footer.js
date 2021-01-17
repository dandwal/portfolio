import React from 'react';

export const Footer = (props) => {
    let style = {}
    if (props.relative) {
        style.position = "relative"
    }
    return (<footer className={"bg-dark"} style={style}>
        Daniel Walford © 2020
    </footer>)

}
