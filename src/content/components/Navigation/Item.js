import React from 'react'
import useToggle from "../../utils/react/toggle";

export const Item = (props) => {
    const [subNavigationOpen, toggleSubNavigation] = useToggle();
    let listClasses = props.isSubItem ? "subitem" : "item";
    if (subNavigationOpen){
        listClasses += " subnavigation-active"
    }
    const parentAnchor = <button tabIndex="0" onClick={toggleSubNavigation} href={"#"}>
        {props.rootName}
        <div className={"has-subnavigation" + (subNavigationOpen ? " nav-arrow-up" : "")}/>
    </button>
    const nulliparousAnchor = <a href={props.rootURI}>{props.rootName}</a>
    const anchor = props.isParent ? parentAnchor : nulliparousAnchor
    let subNavigation = ""
    if (props.subNavigationItems) {
        let subMenuClasses = "subnavigation" + (subNavigationOpen ? " subnavigation-active": "")
        subNavigation = <ul className={subMenuClasses}>{
            props.subNavigationItems.map((item) => {
                return <Item rootURI={item.URI} rootName={item.name} isSubItem={true} key={item.name}/>
            })
        }</ul>
    }

    return (
        <li className={listClasses}>
            {anchor}
            {subNavigation}
        </li>
    )
}
