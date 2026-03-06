"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,        // Smaller lerp = smoother scroll
                duration: 1.5,    // Premium feel smooth duration
                smoothWheel: true,
            }}
        >
            {children}
        </ReactLenis>
    );
}
