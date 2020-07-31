import { useEffect, useRef, MutableRefObject } from "react";

function useObserve<T extends HTMLElement>(): [MutableRefObject<any>] {
    const ref = useRef<T>();
    useEffect(() => {
        const observe: IntersectionObserver = new IntersectionObserver(
            (entries) => {
                // if (entry && entry.isIntersecting) {
                //     console.log("22222");
                // }
                console.log("Entry", entries);
            },
            { rootMargin: "500px 0px 0px 0px", threshold: [0, 0.2] }
        );
        if (ref.current) {
            console.log(222, ref.current);
            observe.observe(ref.current);
        }
        return observe && observe.disconnect();
    }, [ref]);

    return [ref];
}

export default useObserve;
