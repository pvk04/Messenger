import React from "react";

import styles from "./Search.module.css";

function Search(){
    return(
        <input type="text" className={styles.search} placeholder="Search" />
    )
}

export default Search;