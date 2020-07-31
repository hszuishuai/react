//import Empty from ;
import React from "react";
import Empty from "../components/empty";
import { ConfigConsumer, ConfigConsumerProps } from "./context";

const renderEmpty = (type?: string): React.ReactNode => (
    <ConfigConsumer>
        {(configProps: ConfigConsumerProps) => {
            return <Empty />;
        }}
    </ConfigConsumer>
);

export type RenderEmptyHandler = typeof renderEmpty;
export default renderEmpty;
