import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const SelearRout = ({ children }) => {
    const { user, loading, loginUser } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>
    }

    if (loginUser?.ontions === 'Seller') {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SelearRout;