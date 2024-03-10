import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false)

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
        window.localStorage.setItem('mountedComponent', false)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light')
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
        const localChecked = window.localStorage.getItem('mountedComponent');
        localChecked && setMountedComponent(localChecked)
    }, []);
    return [theme, themeToggler, mountedComponent, setMountedComponent, setTheme]
};