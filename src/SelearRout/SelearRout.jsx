import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Pages/Loading/Loading';

const SelearRout = ({ children }) => {
    const { loading, lgUserLoading, loginUser } = useContext(AuthContext);
    const location = useLocation();

    if (loading || lgUserLoading) {
        return <Loading></Loading>
    }

    if (loginUser?.options === 'Seller') {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default SelearRout;