import { useState, useEffect } from 'react';

export const usePreloader = () => {
    const [isPreloaderVisible, setPreloaderVisible] = useState<boolean>(true);

    useEffect(() => {
        const preloaderTime = setTimeout(() => {
            setPreloaderVisible(false);
        }, 2000)

        return () => {
            clearTimeout(preloaderTime);
        }

    }, [])

    return [isPreloaderVisible];
}