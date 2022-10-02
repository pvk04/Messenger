import React from "react";
import SmileyModal from "../../SmileyModal/SmileyModal";
import ButtonsAttachModal from "../../ButtonsAttachModal/ButtonsAttachModal";

import styles from "./MessageInput.module.css";

function MessageInput(){
    const [modalSmileyActive, setModalSmileyActive] = React.useState(false);
    const [modalBtnsActive, setModalBtnsActive] = React.useState(false);

    return(
        <div className={styles.wrap}>
            <div className={styles.body}>
                <button className={styles.btn} onMouseEnter={() => setModalBtnsActive(true)} onMouseLeave={() => setModalBtnsActive(false)}>
                    <img src="/assets/plus.svg" alt="" />
                    <ButtonsAttachModal active={modalBtnsActive} setActive={setModalBtnsActive} />
                </button>
                <input className={styles.messageInput} type="text" placeholder="Type a message here"/>
                <button className={styles.smileBtn} onMouseEnter={() => setModalSmileyActive(true)} onMouseLeave={() => setModalSmileyActive(false)}>
                    <img src="/assets/smile-icon.svg" alt="" />
                    <SmileyModal active={modalSmileyActive} setActive={setModalSmileyActive}/>
                </button>
                <button className={styles.btn}>
                    <img src="/assets/navigation.svg" alt="" />
                </button>
            </div>
        </div>
    );
}

export default MessageInput;