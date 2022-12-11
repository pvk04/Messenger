import React from "react";
import ButtonLogOut from "../ButtonLogOut/ButtonLogOut";
import Navigation from "../Navigation/Navigation";
import Profile from "./Profile/Profile";

import styles from "./AsideBar.module.css";

const profile = {
    href: "/profile",
    label: "Andrew Slim",
    icon: "/assets/profileIcon.svg"
}

function AsideBar() {
    return (
        <aside className={styles.sidebar}>
            <Profile href={profile.href} label={profile.label} icon={profile.icon} />
            <Navigation />
            <ButtonLogOut label={"LOG OUT"} icon={"/assets/power.svg"} />
        </aside>
    );
}

export default AsideBar;