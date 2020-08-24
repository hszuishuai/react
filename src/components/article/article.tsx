import React, { Fragment } from "react";
import styles from "./index.module.less";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { IArticle, ITag } from "@type/index";
import { formDate } from "@/lib/utils";

export interface ArticleProps extends ArticlesProps {
    article: IArticle;
    id: number;
}
export interface ArticlesProps {
    articleList: Array<IArticle>;
    handClick: (index: number) => void;
}

const Article: any = (props: ArticleProps) => {
    const { article, id } = props;
    const onClick: any = () => {
        props.handClick(id);
    };

    const renderTags: any = (tags: Array<ITag>) => {
        return tags.map((tag: ITag) => {
            return (
                <span key={tag.tag_id} className={styles.tags}>
                    <Link to="/home">{tag.tag_name}</Link>
                </span>
            );
        });
    };
    return (
        <div className={styles.article} onClick={onClick}>
            <div className={styles.article__body}>
                <div className={`${styles.article__top} `}>
                    {/* <div className={`${styles.article__top__item} ${styles.post}`}>专栏</div> */}
                    <div className={styles.article__top__item}>{article.author_user_info.user_name}</div>
                    <div className={styles.article__top__item}>{formDate(article.article_info.mtime)}前</div>
                    <div className={styles.article__top__item}>{renderTags(article.tags)}</div>
                </div>
                <div className={styles.article__title}>
                    {/* <span className={styles.article__title--icon}></span> */}
                    <a className={styles.article__title__link} href="./" target="_blank">
                        {article.article_info.title}
                    </a>
                </div>
                <Button.Group>
                    <Button type="primary" className={styles.article__title__button}>
                        <LikeOutlined />
                        {article.article_info.digg_count}
                    </Button>
                    <Button type="primary" className={styles.article__title__button}>
                        <MessageOutlined />
                        {article.article_info.comment_count}
                    </Button>
                </Button.Group>
            </div>
            {article.article_info.cover_image !== "" && (
                <img className={styles.article__img} src={article.article_info.cover_image} alt="title" />
            )}
        </div>
    );
};

const ArticleView: React.SFC<ArticlesProps> = (props) => {
    const { articleList, handClick } = props;
    return (
        <Fragment>
            {articleList.map((article, index) => {
                return <Article id={index} onClick={handClick} article={article} key={index} />;
            })}
        </Fragment>
        // tslint:disable-next-line: object-literal-sort-keys
    );
};

export default ArticleView;
