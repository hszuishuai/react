import { StateType, ActionType } from "typesafe-actions";

declare module "typesafe-actions" {
    export type Store = StateType<typeof import("./index").default>;

    export type RootState = StateType<typeof import("./reducers").default>;

    export type RootAction = ActionType<typeof import("./actions").default>;

    interface Types {
        RootAction: RootAction;
    }
}

