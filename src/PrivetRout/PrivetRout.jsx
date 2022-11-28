import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const PrivetRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivetRout;