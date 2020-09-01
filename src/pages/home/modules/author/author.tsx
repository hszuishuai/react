import React from "react";

import styles from "./author.module.less";
import { IUserInfo } from "../../../../../typing";

export interface IAuthorProps {
    authorData: IUserInfo[] | [];
}
const forMateAvatarUrl = (url: string) => {
    const urlStrList: any[] = url.split("?");
    return urlStrList[0] + "?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1";
};

const Author: React.FC<any> = ({ authorData }: IAuthorProps) => {
    const renderItem: any = () => {
        return authorData.slice(0, 3).map((item) => {
            return (
                <li className={styles.author__item} key={item.user_id}>
                    <div
                        style={{ backgroundImage: `url(${forMateAvatarUrl(item.avatar_large)})` }}
                        className={styles.author__item__avatar}
                    ></div>
                    <div className={styles.userinfo}>
                        <div className={styles.userinfo__name}>
                            <span>{item.user_name}</span>
                            <img
                                className={styles.user_level}
                                src={require(`../../../../assets/svg/lv${item.level}.svg`)}
                            />
                        </div>
                        <div className={styles.userinfo__position}>
                            {item.job_title}
                            {item.company && ` @ ${item.company}`}
                        </div>
                        <div className={styles.userinfo__description}>{item.description}</div>
                    </div>
                </li>
            );
        });
        //return (
        //     <li className={styles.author__item}>
        //         <div className={styles.author__item__avatar}></div>
        //         <div className={styles.userinfo}>
        //             <div className={styles.userinfo__name}>前端森林</div>
        //             <div className={styles.userinfo__position}>前端搬砖工 | Coding、篮球、旅行 @ Cosen</div>
        //             <div className={styles.userinfo__description}>
        //                 「前端森林」公众号作者，支持文章投稿及相互开白名单
        //             </div>
        //         </div>
        //     </li>
        // );
    };
    return (
        <div className={styles.author}>
            <header className={styles.author__header}>🎖️作者榜</header>
            <ul className={styles.author__list}>
                {authorData && renderItem()}
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
