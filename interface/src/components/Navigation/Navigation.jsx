import React from "react";
import NavigationItem from "./NavigationItem";

import styles from "./Navigation.module.css";

const navigation = [
    {
        href: "/home",
        label: "home",
        icon: "/assets/grid.svg"
    },
    {
        href: "/chats",
        label: "chats",
        icon: "/assets/iconChat.svg"
    },
    {
        href: "/contacts",
        label: "contacts",
        icon: "/assets/person.svg"
    },
    {
        href: "/notifications",
        label: "notifications",
        icon: "/assets/bell.svg"
    },
    {
        href: "/calendar",
        label: "calendar",
        icon: "/assets/calendar.svg"
    },
    {
        href: "/settings",
        label: "settings",
        icon: "/assets/settings_2.svg"
    },
];

function Navigation(){
    return (
        <nav>
            <ul className={styles.list}>
                {navigation.map(({ href, label, icon }) =>(
                    <li key={href} className={styles.listItem}>
                        <NavigationItem href={href} label={label} icon={icon} className={styles.btnLogOut}/>
                    </li> 
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;