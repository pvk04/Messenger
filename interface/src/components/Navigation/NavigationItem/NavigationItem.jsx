import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavigationItem.module.css";

function NavigationItem({ href, label, icon }){
    return (
        <NavLink className={({ isActive }) => isActive ? `${styles.item} ${styles.item_active}` : styles.item } to={href}>
            <img src={icon} alt="" />
            <span>{label}</span>
        </NavLink>
    );
}

export default NavigationItem;