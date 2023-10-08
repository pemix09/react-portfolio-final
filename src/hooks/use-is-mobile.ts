import { useLayoutEffect, useState } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        function reactToResize() {
            console.debug(`Windows width: ${window.innerWidth}`);
            if (window.innerWidth > 700) {
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