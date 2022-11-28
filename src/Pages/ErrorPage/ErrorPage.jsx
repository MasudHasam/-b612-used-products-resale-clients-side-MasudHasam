import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-80 '>
            <img className='w-full h-[600px] mt-[290px]' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000" alt="" />
            <h1 className='text-5xl font-bold text-black'>Error 404!</h1>
            <Link className='text-green-400 font-bold mt-4  border-2 px-2 py-1' to='/'>Go Back to home page</Link>
        </div>
    );
};

export default ErrorPage;