import React from "react";

import styles from "./BarHeader.module.css";

function BarHeader({icon, name, status}){
    return(
        <div className={styles.wrap}>
            <div className={styles.head}>
                <img src={icon} alt="" />
                <div className={styles.infoBlock}>
                    <div className={styles.info}>
                        <h1>{name}</h1>
                        <p>{status}</p>
                    </div>
                    <div className={styles.headBtns}>
                        <button>
                            <img src="/assets/attach.svg" alt="" />
                        </button>
                        <button>
                            <img src="/assets/more-vertical.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BarHeader;