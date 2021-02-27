import React from "react";
import styles from "../../Users/users.module.css";
import preloader from "../../../assets/images/preloader.gif";

const Preloader =  (props) => {
    return <img className={styles.preloader} src={preloader} alt=""/>
}

export default Preloader;