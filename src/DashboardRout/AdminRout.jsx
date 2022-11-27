import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const AdminRout = ({ children }) => {
    const { loading, lgUserLoading, loginUser } = useContext(AuthContext);
    const location = useLocation();

    if (loading || lgUserLoading) {
        return <p>Loading...</p>
    }

    if (loginUser?.role === 'Admin') {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRout;