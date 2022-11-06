import React from "react";
import ChatBar from "../ChatBar/ChatBar";
import MessagesBar from "../MessagesBar/MessagesBar";

import styles from "./Main.module.css";

function Main(){
    return (
        <main className={styles.main}>
            <ChatBar />
            <MessagesBar />
        </main>
    )
}

export default Main;