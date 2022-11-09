import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Spinner = ({ children }) => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-purple-400"></div>
    }
    return children;
};

export default Spinner;