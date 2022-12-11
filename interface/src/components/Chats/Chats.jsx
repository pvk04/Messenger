import React from "react";
import ChatBar from "../ChatBar/ChatBar";
import MessagesBar from "../MessagesBar/MessagesBar";
import {Route, Routes} from "react-router-dom";

import styles from "./Chats.module.css";

function Chats(){
    return (
        <main className={styles.main}>
            <ChatBar />
            <Routes>
                <Route path=":id" element={<MessagesBar />} />
            </Routes>
        </main>
    )
}

export default Chats;