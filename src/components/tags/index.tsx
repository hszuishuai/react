import React from "react";
import styles from "./index.module.less";
import { ITag } from "@type/index";

const Tags: React.SFC<any> = ({ tags }) => {
    return (
        <nav className={styles.tag_nav}>
            <ul className={styles.tag_nav_list}>
                <li className={styles.tag_nav_item}>全部</li>
                {tags.map((tag: ITag, index: number) => {
                    return (
                        <li key={index} className={styles.tag_nav_item}>
                            {tag.tag_name}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Tags;
