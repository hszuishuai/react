import * as React from "react";
import { Spin } from "antd";
const Loading: React.FC = () => (
    <div className="example">
        <Spin tip="Loading..."></Spin>,
    </div>
);

export default Loading;
