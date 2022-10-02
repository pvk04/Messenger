import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import styles from "./ChatItem.module.css";

function isFile(file){
    if(file>0){
        return(
            <div className={classNames(`${styles.attachment}`, `${styles.file}`)}>
                <img src="/assets/file-text.svg" alt="" className={styles.fileIcon} />
                <p>File (x{file})</p> 
            </div>
        );
    }
    return(null);
}

function isPhoto(photo){
    if(photo>0){
        return(
            <div className={classNames(`${styles.attachment}`, `${styles.photo}`)}>
                <img src="/assets/image.svg" alt="" className={styles.photoIcon} />
                <p>Photo (x{photo})</p>
            </div>
        );
    }
    return(null);
}

function isVideo(video){
    if(video>0){
        return(
            <div className={classNames(`${styles.attachment}`, `${styles.video}`)}>
                <img src="/assets/video.svg" alt="" className={styles.videoIcon} />
                <p>Video (x{video})</p>
            </div>
        );
    }
    return(null);
}

function isUnread(unreadMessages){
    if (unreadMessages>0){
        return(
            <div>{unreadMessages}</div>
        );
    }
    return(null);
}

function messageLength(message){
    if (message.length >= 137){
        let newStr = message.slice(0,137) + "...";
        return newStr;
    }
    return message;
}

function online(status){
    if (status === "online" || status === "writes" || status === "records voice message"){
        return styles.online;
    }
}



function ChatItem({ href, icon, name, status, date, message, unreadMessages, file, photo, video }){
    return (
        <NavLink className={({ isActive }) => isActive ? `${styles.item_link} ${styles.item_active}` : styles.item_link } to={href}>
            <div className={styles.item_wrap}>
                <div className={styles.item}>
                    <header>
                        <div className={online(status)}>
                            <img className={styles.profile_icon} src={icon} alt="" />
                        </div>
                        <div className={styles.item_head}>
                            <div className={styles.item_info}>
                                <h1>{name}</h1>
                                <p className={styles.item_info_p}>{status}</p>
                            </div>
                            <p className={styles.item_head_p}>{date}</p>
                        </div>
                    </header>
                    <main className={styles.item_body}>
                        <span>{messageLength(message)}</span>
                        {isUnread(unreadMessages)}
                    </main>
                    <footer className={styles.attachments}>
                        {isFile(file)}
                        {isPhoto(photo)}
                        {isVideo(video)}
                    </footer>
                </div>                
            </div>

        </NavLink>
    );
}

export default ChatItem;