import React from "react";

import styles from "./CalendarPage.module.css"

function CalendarPage(){
    return(
        <main className={styles.module}>
            <div className={styles.wrap}>
                <header>Calendar</header>
            </div>
        </main>
    );
}

export default CalendarPage;