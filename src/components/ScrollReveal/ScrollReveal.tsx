import React from "react";

export default function ScrollReveal({ children, direction = "up", delay = 0 }: { children: React.ReactNode, direction?: string, delay?: number }) {
    return <div style={{ transitionDelay: `${delay}s` }}>{children}</div>;
}
