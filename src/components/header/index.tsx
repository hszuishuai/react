import React from "react";
import cx from "classnames";
import styles from "./index.module.less";
import { NavLink } from "react-router-dom";
import { ConfigConsumer } from "@/provider";
import { ConfigConsumerProps } from "@/provider/context";

// const useScroll = () => {};
export interface IAppHeaderProp extends ConfigConsumerProps {
    children?: React.ReactNode;
}
export interface INav {
    path: string;
    name: string;
}

const NavList: INav[] = [
    { path: "/home", name: "首页" },
    { path: "/post", name: "沸点" },
    { path: "/pins", name: "话题" },
    { path: "/book", name: "小册" },
];

export const AppHeader: React.SFC<IAppHeaderProp> = ({ isNav }) => {
    const rendNav = () => {
        return NavList.map((nav) => {
            return (
                <li className={styles.nav_item} key={nav.name}>
                    <NavLink activeClassName={styles.active} to={nav.path}>
                        {nav.name}
                    </NavLink>
                </li>
            );
        });
    };
    return (
        <div className={styles.app_header}>
            <header className={cx(styles.app_header_container, { [`${styles.top}`]: isNav })}>
                <div className={styles.container}>
                    <div className={styles.container_logo}>
                        <img src="https://s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg" alt="logo" />
                    </div>
                    <nav className={styles.container_nav}>
                        <ul className={styles.nav_list}>{rendNav()}</ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default function HeaderContainer(): JSX.Element {
    //const history = useHistory();

    return (
        <ConfigConsumer>
            {(context) => {
                console.log(context);
                return <AppHeader {...context} />;
            }}
        </ConfigConsumer>
    );
}
