import React from "react";
import BarHeader from "./BarHeader/BarHeader";
import MessageInput from "./MessageInput/MessageInput";
import { useParams } from "react-router-dom";

import styles from "./MessagesBar.module.css";

const PrivateMessages = [
    {  
        href: "test",
        icon: "/assets/person1.svg",
        name: "Evgeniy Panchurin",
        status: "online"
    },
    {
        href: "test1",
        icon: "/assets/person1.svg",
        name: "Azat Panasyan",
        status: "last online 5 hours ago"
    }
];

function MessagesBar() {
    const {id} = useParams();
    
    let Current = PrivateMessages.find(el => el.href == id);
    if (!Current){
        Current = {};
    }

    return(
        <div className={styles.module}>
            <BarHeader icon={Current.icon} name={Current.name} status={Current.status} />
            <main></main>
            <MessageInput />
        </div>
    )
}

export default MessagesBar;