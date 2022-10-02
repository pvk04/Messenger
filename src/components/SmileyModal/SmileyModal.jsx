import React from "react";

import styles from "./SmileyModal.module.css";

function SmileyModal({active, setActive}){
    return(
        <div className={ active ? `${styles.modal} ${styles.active}` : styles.modal } onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}> 
            <div className={styles.relativeWrap}>
                
            </div>
        </div>
    );
}

export default SmileyModal;