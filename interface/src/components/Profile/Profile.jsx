import React from "react";
import { Link } from "react-router-dom";

import styles from "./Profile.module.css";

function Profile({href, label, icon}){
    return(
        <Link className={styles.item} to={href}>
            <img className={styles.icon} src={icon} alt="" />
            <h1 className={styles.name}>{label}</h1>
        </Link>
    );
}

export default Profile;