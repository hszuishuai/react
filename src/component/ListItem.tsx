import React from "react";

export interface ListItemProps {
    name: string;
    sex: "男" | "女";
}

export type ListType = {
    List: ListItemProps[]
};
interface _func<T> {
    (item: T): JSX.Element;
}

const ListItem: React.SFC<ListType> = (props) => {
    const { List } = props;
    const _rendItme: any = (item: ListItemProps): JSX.Element => {
        return (
            <li>{item.name} || {item.sex}</li>
        );
    };
    return (
        <ul>
            {
                List.map(_rendItme)
            }
        </ul>
    );
};

export default ListItem;
