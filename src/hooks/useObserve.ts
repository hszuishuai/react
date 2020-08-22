import { useEffect, useRef, MutableRefObject } from "react";

function useObserve<T extends HTMLElement>(): [MutableRefObject<any>] {
    const ref: MutableRefObject<any> = useRef<T>();
    useEffect(() => {
        const observe: IntersectionObserver = new IntersectionObserver((entries) => {
            // if (entry && entry.isIntersecting) {
            //     console.log("22222");
            // }
            console.log("Entry", entries);
        });
        if (ref.current) {
            observe.observe(ref.current);
        }
        //return observe && observe.disconnect();
    }, [ref]);

    return [ref];
}

export default useObserve;
