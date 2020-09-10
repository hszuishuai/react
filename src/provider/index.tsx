import React from "react";
import { ConfigConsumer, ConfigContext, ConfigConsumerProps } from "./context";
import { RenderEmptyHandler } from "./renderEmpty";

export { ConfigConsumer, ConfigContext };

export interface IConfigProviderProps {
    renderEmpty?: RenderEmptyHandler;
    children?: React.ReactNode;
}

const ConfigProvider: React.FC<IConfigProviderProps> = (props) => {
    const { children } = props;
    const [isNav, setNav] = React.useState(false);
    React.useEffect(() => {
        const handlerScrollEvent: any = () => {
            const scrollTop: number = document.documentElement.scrollTop;
            if (scrollTop > 700) {
                setNav(true);
            } else {
                setNav(false);
            }
            // console.log("scrollTop", scrollTop);
        };
        window.addEventListener("scroll", handlerScrollEvent, false);
        return () => window.removeEventListener("scroll", handlerScrollEvent, false);
    }, []);

    const render: any = (context: ConfigConsumerProps) => {
        const config = {
            ...context,
            isNav,
        };
        return <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>;
    };

    return <ConfigConsumer>{(context) => render(context)}</ConfigConsumer>;
    // <ConfigConsumer>
    //     <ConfigContext>{props.c}</ConfigContext>
    // </ConfigConsumer>
};

export default ConfigProvider;

//export  { ConfigConsumerProps } from "./context";
