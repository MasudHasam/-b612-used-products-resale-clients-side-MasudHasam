import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const SelearRout = ({ children }) => {
    const { loading, lgUserLoading, loginUser } = useContext(AuthContext);
    const location = useLocation();

    if (loading || lgUserLoading) {
        return <p>Loading...</p>
    }
    console.log(loginUser?.options);
    if (loginUser?.options === 'Seller') {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SelearRout;