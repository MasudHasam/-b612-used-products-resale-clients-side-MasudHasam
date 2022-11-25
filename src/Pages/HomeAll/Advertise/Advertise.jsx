import React from 'react';
import { Link } from 'react-router-dom';

const Advertise = () => {
    return (
        <div className='my-20 text-center'>
            <h1 className='text-4xl italic text-green-400'>Advertised Items</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-2 gap-4'>
                <Link className=''>
                    <div className="card w-11/12 lg:hover:w-[91.777%] bg-base-100 shadow-2xl">
                        <figure className="px-10 py-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Advertise;