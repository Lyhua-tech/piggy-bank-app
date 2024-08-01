import React from 'react'
import useNavigate from '../hooks/useNavigate'

const Link = ({ to, children}) => {
    const { currentPath, navigate } = useNavigate()

    const handleClick = (event) => {
        // event is to take the metaKey and ctrlKey for new tab
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to)
    }
    return (
        <a onClick={handleClick} href={to}></a>
    )
}

export default Link