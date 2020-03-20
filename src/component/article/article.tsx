import React from "react";
import styles from "./index.module.less";
import { Button } from "antd";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { IArticleProps } from "@type/index";

export interface ArticleProps {
    article: IArticleProps;
    onClick: (id: number) => void;
    id: number;
}
export interface ArticlesProps {
    articleList: Array<IArticleProps>;
    handClick: (index: number) => void;
}

const Article: any = (props: ArticleProps) => {
    const { article, id } = props;
    const onClick: any = () => {
        props.onClick(id);
    };
    return (
        <div className={styles.article} onClick={onClick}>
            <div className={styles.article__body}>
                <div className={`${styles.article__top} `}>
                    <span className={`${styles.article__top__item} ${styles.post}`}>{article.theme}</span>
                    <span className={styles.article__top__item}>{article.author}</span>
                    <span className={styles.article__top__item}>{article.releaseTime}</span>
                    <span className={styles.article__top__item}>java</span>
                </div>
                <div className={styles.article__title}>
                    {/* <span className={styles.article__title--icon}></span> */}
                    <a className={styles.article__title__link} href="./" target="_blank">
                        {article.title}
                    </a>
                </div>
                <Button.Group>
                    <Button type="primary" className={styles.article__title__button}>
                        <LikeOutlined />
                        {article.likes}
                    </Button>
                    <Button type="primary" className={styles.article__title__button}>
                        <MessageOutlined />
                        {article.comments}
                    </Button>
                </Button.Group>
            </div>
            {article.articleUrl !== "" && <img className={styles.article__img} src={article.articleUrl} alt="title" />}
        </div>
    );
};

const ArticleView: React.SFC<ArticlesProps> = props => {
    const { articleList, handClick } = props;
    return (
        <div>
            {articleList.map((article: IArticleProps, index) => {
                return <Article id={index} onClick={handClick} article={article} key={article.author} />;
            })}
        </div>
        // tslint:disable-next-line: object-literal-sort-keys
    );
};

export default ArticleView;
