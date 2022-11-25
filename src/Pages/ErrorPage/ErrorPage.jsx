import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-80 '>
            <h1 className='text-5xl font-bold text-black'>Error 404!</h1>
            <Link className='text-green-400 font-bold mt-4  border-2 px-2 py-1' to='/'>Go Back to home page</Link>
        </div>
    );
};

export default ErrorPage;