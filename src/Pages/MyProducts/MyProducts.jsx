import React from 'react';

const MyProducts = () => {
    return (
        <div className='my-10 flex flex-col gap-8'>
            <h1 className='text-3xl text-green-400 italic text-center'>All of my added products</h1>
            <div className="card lg:card-side px-2 lg:px-0 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-semibold">Hear will show product name</h2>
                    <p className='text-xl'>Details: Click the button to listen on Spotiwhy app.Click the button to listen on Spotiwhy app.</p>
                    <p className='mt-0 pt-0'>Price: </p>
                    <p className='mt-0 pt-0'>Condition: </p>
                    <p className='mt-0 pt-0'>Status: </p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Advertise Product</button>
                        <button className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;