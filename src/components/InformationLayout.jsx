import React from "react";
import styles from "../styles/Information.module.css"

const InformationLayout=({check,turn, winner, draw})=>{
    return (
        <h1 className={styles.h1}>{check(turn, winner, draw)}</h1>
    )
}

export default InformationLayout;