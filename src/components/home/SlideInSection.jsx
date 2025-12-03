import { useRef, useEffect, useState } from 'react';
import './Home.css';

export default function SlideInSection({ children, direction = 'left', delay = 0, className = '' }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const dirClass = `slide-${direction}`;
    const style = { transitionDelay: `${delay}ms` };

    return (
        <div
            ref={ref}
            className={`slide-in-section ${dirClass} ${visible ? 'is-visible' : ''} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
}