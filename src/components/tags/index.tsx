import React from "react";
import cx from "classnames";
import styles from "./index.module.less";
import { ITag } from "@type/index";

const Tags: React.SFC<any> = ({ tags, isUnfold, setUnfold }) => {
    return (
        <nav className={styles.tag_nav}>
            <ul className={styles.tag_nav_list}>
                <li className={styles.tag_nav_item}>全部</li>
                {tags.slice(0, isUnfold ? tags.length : 9).map((tag: ITag, index: number) => {
                    return (
                        <li key={index} className={styles.tag_nav_item}>
                            {tag.tag_name}
                        </li>
                    );
                })}
                {!isUnfold && (
                    // `${styles.tag_nav_item} ${styles.unfold}`
                    <li onClick={setUnfold} className={cx(styles.tag_nav_item, styles.unfold)}>
                        展开
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Tags;
