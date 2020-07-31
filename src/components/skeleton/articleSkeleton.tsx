import React from "react";
import ContentLoader from "react-content-loader";

const ArticleSkeleton: any = (props: any) => {
    return (
        <ContentLoader viewBox="0 0 380 60" style={{ background: "#fff" }}>
            {/* <rect x="0" y="0" width="380" height="60" fill="#fff"> */}
            <rect x="15" y="15" width="200" height="8" />
            <rect x="15" y="25" width="250" height="8" />
            <rect x="15" y="35" width="300" height="8" />
            {/* </rect> */}
        </ContentLoader>
    );
};

export default ArticleSkeleton;
