import { useState, useCallback, DependencyList, useEffect } from "react";
import useMountState from "./useMountState";

export type TFetch<T> = {
    data?: T | undefined;
    loading: Boolean;
    error?: undefined | Error;
    loadData: () => Promise<T>;
};

export default function useFetch<Result = any, Args extends any[] = any[]>(
    fetchFn: (...args: Args | []) => Promise<Result>,
    immediate: Boolean = false,
    deps: DependencyList = []
): TFetch<Result> {
    const [loading, setLoading] = useState<Boolean>(true);
    const [error, setError] = useState();
    const [data, setData] = useState();
    const isMounted: () => Boolean = useMountState();

    const loadData: any = useCallback(async (...args: Args | []) => {
        setLoading(true);
        try {
            const res: any = await fetchFn(...args);
            /**
             * isMounted的作用 确保组件已经加载完成 在修改state状态。 防止因为异步请求还未完成,组件意外卸载导出报错。
             */
            isMounted() && setData(res.data);
        } catch (e) {
            isMounted() && setError(e);
        }
        isMounted() && setLoading(false);
    }, deps);

    useEffect(() => {
        if (immediate) {
            loadData();
        }
    }, [loadData]);

    return { data, loading, error, loadData };
}
