import React from "react";
import { useParams } from "react-router-dom";
const Post: React.SFC = () => {
    const { id } = useParams();

    return (
        <div>
            <span>2www</span>
            {id}
        </div>
    );
};

export default Post;
