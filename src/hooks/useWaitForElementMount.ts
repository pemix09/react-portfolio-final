import { useLayoutEffect, useRef, useState } from "react"

export function useWaitForElementMount(elementId: string) {
    const [element, setElement] = useState<HTMLElement>();
    const numberOfTries = useRef<number>(0);

    useLayoutEffect(() => {
        async function getElement() {
            const element = document.getElementById(elementId);

            if (element) {
                console.debug(`Found element with id ${elementId} after ${numberOfTries.current} tries`);
                setElement(element);
            } else {
                numberOfTries.current++;
                console.debug(`Waiting for element with id ${elementId}`);
                await new Promise(() => setTimeout(() => {
                    requestAnimationFrame(getElement);
                }, 100));
            }
        }

        getElement();

    }, [elementId]);

    return element;
}