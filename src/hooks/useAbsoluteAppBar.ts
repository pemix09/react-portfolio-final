import { useLayoutEffect, useState } from "react";
import { navBarId } from "../features/nav-bar/nav-bar";

export default function useIsAbsoluteAppBar() {
    const [isAbsoluteAppBar, setIsAbsoluteAppBar] = useState(false);

    useLayoutEffect(() => {
        let handleScroll = () => {
            let scrollPos: number = window.scrollY;
            let navBar = document.getElementById(navBarId);

            if (!navBar) {
                setIsAbsoluteAppBar(false);
            } else {

                let navBarHeight: number = navBar.offsetHeight;
                let shouldNavBarBeAbsolute = navBarHeight < scrollPos;

                setIsAbsoluteAppBar(shouldNavBarBeAbsolute);
            }
        }

        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    })

    return isAbsoluteAppBar;
}