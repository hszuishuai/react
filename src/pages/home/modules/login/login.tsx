import React from "react";
import styles from "./login.module.less";
import { Button } from "antd";

export default function Login(): JSX.Element {
    return (
        <section className={styles.register}>
            <div className={styles.title}>掘金 - juejin.im</div>
            <div className={styles.slogan}>一个帮助开发者成长的社区</div>
            <div className={styles.input_group}>
                <div className={styles.input_box}>
                    <input placeholder="用户名" className={styles.input} />
                </div>
                <div className={styles.input_box}>
                    <input placeholder="密码(不少于6位)" className={styles.input} />
                </div>
            </div>
            <Button type="primary" className={styles.registerBtn}>
                立即注册
            </Button>
            <div className={styles.agreement_box}>
                注册登录即表示
                <br />
                同意
                <a href="/">用户协议</a>、<a href="/">隐私政策</a>
            </div>
        </section>
    );
}
