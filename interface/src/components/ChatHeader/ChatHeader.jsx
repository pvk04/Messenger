import React from "react";

import styles from "./ChatHeader.module.css";

function ChatHeader() {
    return(
        <header className={styles.header}>
            <span>Chats</span>
            <button>
                <img src="/assets/plus.svg" alt="" />
                <span>Create New Chat</span>
            </button>
        </header>
    )
}

export default ChatHeader;