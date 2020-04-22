import * as React from "react";

//import classNames from "classnames";

import { categoryList } from "../../mock/data";
import styles from "./index.module.less";

import { Link } from "react-router-dom";
//import styles from "./navigate.module.less";

const Navigate: React.SFC<any> = () => {
    return (
        <nav className={styles.view__nav}>
            <ul className={styles.nav__list}>
                {categoryList.items.map((category: any) => {
                    return (
                        <li key={category.id} className={styles.nav__item}>
                            <Link
                                to={{
                                    pathname: category.path,
                                    state: {
                                        id: category.id,
                                    },
                                }}
                            >
                                {category.category}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigate;
