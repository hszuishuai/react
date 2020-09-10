import * as React from "react";
import cx from "classnames";

//import { categoryList } from "../../mock/data";
import { ICategory } from "../../../typing";
import styles from "./index.module.less";

import { NavLink } from "react-router-dom";
//import styles from "./navigate.module.less";

export interface INavProp {
    categoryList: Array<ICategory>;
    isNav?: boolean;
}

const Navigate: React.SFC<INavProp> = ({ categoryList, isNav }) => {
    // if (!categoryList) {
    //     return null;
    // }
    return (
        <div className={styles.main__header}>
            <nav className={cx(styles.view__nav, { [`${styles.top}`]: isNav })}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <NavLink
                            to={"/home/recommend"}
                            activeClassName={styles.active}
                            isActive={(_, location) => {
                                if (location.pathname === "/home" || location.pathname === "/home/recommend") {
                                    return true;
                                }
                                return false;
                            }}
                        >
                            推荐
                        </NavLink>
                    </li>
                    {categoryList.map((category: ICategory) => {
                        return (
                            <li key={category.category_id} className={styles.nav__item}>
                                <NavLink to={"/home/" + category.category_url} activeClassName={styles.active}>
                                    {category.category_name}
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
