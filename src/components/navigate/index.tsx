import * as React from "react";
//import classNames from "classnames";

import { categoryList } from "../../mock/data";
import styles from "./index.module.less";

import { NavLink } from "react-router-dom";
//import styles from "./navigate.module.less";

const Navigate: React.SFC<any> = () => {
    return (
        <div className={styles.main__header}>
            <nav className={styles.view__nav}>
                <ul className={styles.nav__list}>
                    {categoryList.items.map((category: any) => {
                        return (
                            <li key={category.id} className={styles.nav__item}>
                                <NavLink to={category.path} activeClassName={styles.active}>
                                    {category.category}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Navigate;
