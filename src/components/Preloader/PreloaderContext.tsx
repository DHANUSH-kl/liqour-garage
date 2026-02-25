'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface PreloaderContextType {
    isLoading: boolean;
    finishLoading: () => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    const finishLoading = () => {
        setIsLoading(false);
    };

    return (
        <PreloaderContext.Provider value={{ isLoading, finishLoading }}>
            {children}
        </PreloaderContext.Provider>
    );
}

export function usePreloader() {
    const context = useContext(PreloaderContext);
    if (context === undefined) {
        throw new Error('usePreloader must be used within a PreloaderProvider');
    }
    return context;
}
