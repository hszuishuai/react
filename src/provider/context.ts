import React from "react";
import defaultRenderEmpty, { RenderEmptyHandler } from "./renderEmpty";

export interface ConfigConsumerProps {
    renderEmpty: RenderEmptyHandler;
    isNav?: boolean;
}

export const ConfigContext = React.createContext<ConfigConsumerProps>({
    renderEmpty: defaultRenderEmpty,
});

export const ConfigConsumer = ConfigContext.Consumer;
