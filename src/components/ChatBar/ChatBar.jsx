import React from "react";
import ChatHeader from "../Chats/ChatHeader/ChatHeader";
import Search from "../Search/Search";
import ChatItem from "./ChatItem/ChatItem";

import styles from "./ChatBar.module.css";

const items = [
    {
        href: "test",
        icon: "/assets/person1.svg",
        name: "Evgeniy Panchurin",
        status: "online",
        date: "1 minute ago",
        message: "Privet L'iosh",
        unreadMessages: 1,
        file: 2,
        photo: 10,
        video: 1
    },
    {
        href: "test1",
        icon: "/assets/person1.svg",
        name: "Azat Panasyan",
        status: "last online 5 hours ago",
        date: "1 minute ago",
        message: "test test tset este tset ests ets ets tse testsetststset ts tsetse estes teste stestes tset set tse stest etsetse stets es test e stes teeset tcysdtfgsdfvb f",
        unreadMessages: 2,
        photo: 1
    },
    {
        href: "test2",
        icon: "/assets/person1.svg",
        name: "Daniil Lihachmek",
        status: "last online 5 hours ago",
        date: "1 minute ago",
        message: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.",
        unreadMessages: 10,
        video: 1
    },
    {
        href: "test3",
        icon: "/assets/person1.svg",
        name: "Эндрю Слим",
        status: "last online 5 hours ago",
        date: "1 minute ago",
        message: "Privet L'iosh",
        unreadMessages: 0
    },
    {
        href: "test4",
        icon: "/assets/person1.svg",
        name: "Автошкола 'Вираж'",
        status: "last online 5 hours ago",
        date: "1 minute ago",
        message: "У Вас 2 пропущенных",
        unreadMessages: 1
    },
]

function ChatBar(){
    return(
        <div className={styles.module}>
            <ChatHeader />
            <Search />
            <nav>
                <ul className={styles.list}> 
                    {items.map(({ href, icon, name, status, date, message, unreadMessages, file, photo, video })=>(
                        <li key={href} className={styles.listItem}>
                            <ChatItem href={href} icon={icon} name={name} status={status} date={date} message={message} unreadMessages={unreadMessages} file={file} photo={photo} video={video} />
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default ChatBar;