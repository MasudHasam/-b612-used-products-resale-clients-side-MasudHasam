import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const ProtectedBuyer = ({ children }) => {
    const { loading, loginUser } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>
    }

    if (loginUser?.options === 'Buyer') {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default ProtectedBuyer;