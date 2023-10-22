import { useLayoutEffect, useState } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        function reactToResize() {
            if (window.innerWidth > 1130) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        }
        //initial launch of app
        reactToResize();
        window.addEventListener('resize', reactToResize);
        return () => window.removeEventListener('resize', reactToResize);
    }, []);

    return isMobile;
}