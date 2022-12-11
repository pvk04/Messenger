import React from "react";

import styles from "./ButtonsAttachModal.module.css";

function ButtonsAttachModal({active, setActive}){
    return(
        <div className={ active ? `${styles.modal} ${styles.active}` : styles.modal } onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
            <div className={styles.contentWrap}>
                <button className={styles.btn} onClick={e => e.stopPropagation()} >
                    <img src="/assets/video.svg" alt="" />
                </button>
                <button className={styles.btn} onClick={e => e.stopPropagation()} >
                    <img src="/assets/image.svg" alt="" />
                </button>
                <button className={styles.btn} onClick={e => e.stopPropagation()} >
                    <img src="/assets/file-text.svg" alt="" />
                </button>
            </div>
        </div>
    );
}

export default ButtonsAttachModal;