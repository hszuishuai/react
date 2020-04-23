import { ComponentProps } from "react";
import { lazy } from "react";
import { categoryList } from "@/mock/data";

const homeRouter: any = categoryList.items.map((category: any) => {
    const homeRoute: any = {};
    homeRoute.exact = false;
    homeRoute.component = lazy(() => import("@/pages/post"));
    homeRoute.path = category.path;
    return homeRoute;
});

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
        children: homeRouter,
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
