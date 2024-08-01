import {React, useState, useEffect, createContext} from 'react'

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    // Assign currentPath usestate for rerender while we change path of each page
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', handler)
        return () => {
            window.removeEventListener('popstate', handler)
        }
    })

    const navigate = (to) => {
        // this instruction will be visit the path that we provide to
        window.history.pushState({}, '', to);
        setCurrentPath(to)
    }
    return (
        <NavigationContext.Provider value={{navigate, currentPath}}>
            {children}
        </NavigationContext.Provider>
    )
}

export { NavigationProvider }
export default NavigationContext