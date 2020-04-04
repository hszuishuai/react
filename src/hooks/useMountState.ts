import { useCallback, useRef, useEffect } from "react";

function useMountState(): () => boolean {
    const mountRef: any = useRef<boolean>(false);
    const get: () => boolean = useCallback(() => mountRef.current, []);

    useEffect(() => {
        mountRef.current = true;
        return () => {
            mountRef.current = false;
        };
    }, []);
    return get;
}

export default useMountState;
