import React from "react";

export interface ListItemProps {
    name: string;
    sex: "男" | "女";
}

export type ListType = {
    List: ListItemProps[]
};
interface TFunc<T> {
    (item: T): JSX.Element;
}

const ListItem: React.SFC<ListType> = (props) => {
    const { List } = props;
    const _rendItem: TFunc<ListItemProps> = (item): JSX.Element => {
        return (
            <li key={item.name}>{item.name} || {item.sex}</li>
        );
    };
    return (
        <ul>
            {
                List.map(_rendItem)
            }
        </ul>
    );
};

export default ListItem;
