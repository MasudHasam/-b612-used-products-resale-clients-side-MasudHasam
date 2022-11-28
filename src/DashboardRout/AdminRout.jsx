import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Loading from '../Pages/Loading/Loading';

const AdminRout = ({ children }) => {
    const { loading, lgUserLoading, loginUser } = useContext(AuthContext);
    const location = useLocation();

    if (loading || lgUserLoading) {
        return <Loading></Loading>
    }

    if (loginUser?.role === 'Admin') {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRout;