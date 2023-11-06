import { useState, useLayoutEffect } from 'react';

export default function useActiveSection() {
    let [activeSetcion, setActieSection] = useState<string | null>(null);

    useLayoutEffect(() => {
        function updateActiveSection() {
            const sectionsDiv: NodeList = document.querySelectorAll('#sectionsId');

            if (!sectionsDiv) return;

            let sectionsNodes: NodeListOf<ChildNode> = sectionsDiv[0].childNodes;  
            sectionsNodes.forEach((section: ChildNode) => {

                if (section instanceof HTMLElement) {
                    const elementTopPosition = section.offsetTop;
                    const elementBottomPosition = section.offsetTop + section.offsetHeight;
                    const elementMiddlePosition = section.offsetTop + section.offsetHeight / 2;
                    const endOfScreenPosition = window.scrollY + window.innerHeight - 100;
        
                    if (endOfScreenPosition > elementMiddlePosition) {
                        setActieSection(section.id);
                    }
                }
            });
        }

        updateActiveSection();

        window.addEventListener('scroll', updateActiveSection);
        return () => window.removeEventListener('scroll', updateActiveSection);
    })

    return activeSetcion;
}