import { ComponentProps } from "react";
import { lazy } from "react";

export interface IRouter {
    component: ComponentProps<any>;
    path: string;
    exact?: boolean;
    children?: Array<IRouter>;
}
const routeList: IRouter[] = [
    {
        component: lazy(() => import("../pages/home/Home")),
        path: "/home",
        // tslint:disable-next-line: object-literal-sort-keys
        exact: false,
        children: [
            {
                component: lazy(() => import("@/pages/books")),
                exact: false,
                path: "/home/books",
            },
            {
                component: lazy(() => import("@/pages/pins")),
                exact: false,
                path: "/home/pins",
            },
            {
                component: lazy(() => import("@/pages/topics")),
                exact: false,
                path: "/home/topics",
            },
        ],
    },
    {
        component: lazy(() => import("../App")),
        path: "/",
        exact: true,
    },
    {
        component: lazy(() => import("@/pages/post")),
        path: "/post/:id",
        exact: false,
    },
    {
        component: lazy(() => import("@/App")),
        path: "/app",
        exact: false,
    },
];

export default routeList;
