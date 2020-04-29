import React from "react";
import styles from "./index.module.less";

const Tags: React.SFC<any> = () => {
    return (
        <nav className={styles.tag_nav}>
            <ul className={styles.tag_nav_list}>
                <li className={styles.tag_nav_item}>全部</li>
                <li className={styles.tag_nav_item}>Java</li>
                <li className={styles.tag_nav_item}>GO</li>
                <li className={styles.tag_nav_item}>展开</li>
            </ul>
        </nav>
    );
};

export default Tags;
