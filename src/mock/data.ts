export interface ICategory {
    id: string;
    category: string;
    path: string;
}

export interface ICategoryList {
    items: Array<ICategory>;
}

const categoryList: any = {
    items: [
        {
            id: "",
            category: "推荐",
            path: "/home",
        },
        {
            id: "5562b419e4b00c57d9b94ae2",
            category: "后端",
            path: "/home/backend",
        },
        {
            id: "5562b415e4b00c57d9b94ac8",
            category: "前端",
            path: "/home/frontend",
        },
        {
            id: "5562b410e4b00c57d9b94a92",
            category: "Android",
            path: "/home/android",
        },
        {
            id: "5562b405e4b00c57d9b94a41",
            category: "iOS",
            path: "/home/ios",
        },
        {
            id: "57be7c18128fe1005fa902de",
            category: "人工智能",
            path: "/home/ai",
        },
        {
            id: "5562b422e4b00c57d9b94b53",
            category: "开发工具",
            path: "/home/freebie",
        },
        {
            id: "5c9c7cca1b117f3c60fee548",
            category: "代码人生",
            path: "/home/career",
        },
        {
            id: "5562b428e4b00c57d9b94b9d",
            category: "阅读",
            path: "/home/article",
        },
    ],
};

export { categoryList };
