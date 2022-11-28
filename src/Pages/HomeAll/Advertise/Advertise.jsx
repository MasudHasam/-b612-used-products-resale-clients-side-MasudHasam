import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';
import { config } from 'daisyui';

const Advertise = () => {
    const { user } = useContext(AuthContext);
    const [advertises, setAdvertises] = useState();
    // const { data: advertises = [], refetch } = useQuery({
    //     queryKey: ['advertises'],
    //     queryFn: async () => {
    //         const res = await fetch(`https://used-product-resale-server-orcin.vercel.app/advertisedProduct/${user?.email}`, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //         const data = await res.json();
    //         return data;
    //     }
    // })
    useEffect(() => {
        if (!user?.email) {
            return;
        } else {
            fetch(`https://used-product-resale-server-orcin.vercel.app/advertisedProduct/${user?.email}`, {
                // headers: {
                //     authorization: `bearer ${localStorage.getItem('accessToken')}`
                // }
            })
                .then(res => res.json())
                .then(data => {
                    setAdvertises(data)
                })
        }
    }, [user?.email, advertises?.length])

    return (
        <div>
            {
                advertises?.length > 0 &&
                <div className='my-20 text-center'>
                    <h1 className='text-4xl italic text-green-400'>Advertised Items</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-4 mt-2 gap-4'>
                        {
                            advertises?.map(advertise =>


                                <Link to={`/items/${advertise.categoryID}`} key={advertise._id} className=''>
                                    <div className="card w-11/12 lg:hover:w-[91.777%] bg-base-100 shadow-2xl">
                                        <figure className="px-10 py-10">
                                            <img className='w-[250px] h-[200px] rounded-xl' src={advertise.picture} alt="Shoes" />
                                        </figure>
                                    </div>
                                </Link>

                            )
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Advertise;