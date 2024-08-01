import React from 'react'
import useNavigate from '../hooks/useNavigate'

const Route = ({ path, children }) => {
    const { currentPath } = useNavigate();

    if (currentPath === path ){
        return children;
    }

    return null;
}

export default Route