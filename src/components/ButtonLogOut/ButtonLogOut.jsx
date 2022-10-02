import React from "react";

import styles from "./ButtonLogOut.module.css";

function ButtonLogOut({label, icon}){
    return(
        <button className={styles.button}>
            <img src={icon} alt="" />
            <span>{label}</span>
        </button>
    );
}

export default ButtonLogOut;