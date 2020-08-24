import React from "react";
import styles from "./author.module.less";

const Author: React.FC<any> = (prop) => {
    return (
        <div className={styles.author}>
            <header className={styles.author__header}>🎖️作者榜</header>
            <ul className={styles.author__list}>
                <li className={styles.author__item}>
                    <div className={styles.author__item__avatar}></div>
                    <div className={styles.userinfo}>
                        <div className={styles.userinfo__name}>前端森林</div>
                        <div className={styles.userinfo__position}>前端搬砖工 | Coding、篮球、旅行 @ Cosen</div>
                        <div className={styles.userinfo__description}>
                            「前端森林」公众号作者，支持文章投稿及相互开白名单
                        </div>
                    </div>
                </li>
                <li className={styles.author__item}>
                    <div className={styles.more}>
                        <span>完整榜单</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Author;
