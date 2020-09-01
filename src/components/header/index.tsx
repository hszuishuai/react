import React, { useEffect } from "react";
import styles from "./index.module.less";
import { useHistory, withRouter, NavLink } from "react-router-dom";

// const useScroll = () => {};
export interface IAppHeaderProp {
    jump: (path: string) => void;
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

export const AppHeader: React.SFC<IAppHeaderProp> = ({ jump }) => {
    const rendNav = () => {
        return NavList.map((nav) => {
            return (
                <li className={styles.nav_item} key={nav.name}>
                    <NavLink
                        activeClassName={styles.active}
                        // isActive={(match, location) => {
                        //     // location.url === nav.pat
                        //     console.log(match, nav.path, location.pathname.includes(nav.path));
                        //     return location.pathname.includes(nav.path);
                        // }}
                        to={nav.path}
                    >
                        {nav.name}
                    </NavLink>
                </li>
            );
        });
    };
    return (
        <div className={styles.app_header}>
            <header className={styles.app_header_container}>
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

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {}, false);
    //     return window.removeEventListener("scroll", () => {}, false);
    // }, []);

    const jump = (path: string) => {
        // history.push(path);
    };
    return <AppHeader jump={jump} />;
}
