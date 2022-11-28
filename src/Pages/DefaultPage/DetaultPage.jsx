import React from 'react';
import TitleHooks from '../../TitleHook/TitleHook';

const DetaultPage = () => {
    TitleHooks('dashboard')
    return (
        <div>
            <h1 className='flex justify-center items-center mt-10 lg:mt-20 lg:text-5xl shadow-2xl text-4xl font-extrabold italic text-orange-500'>Welcome to Dashboard zome</h1>
        </div>
    );
};

export default DetaultPage;