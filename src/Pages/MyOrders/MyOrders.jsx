import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { async } from '@firebase/util';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/order/${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = res.json()
            return data;
        }
    })

    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-3xl font-semibold italic text-center mb-2 text-green-400'>All orderd items</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    orders.map(order =>
                        <div key={order._id} className="card card-compact full bg-base-100 shadow-xl">
                            <figure><img className='w-[200px ] h-[200px]' src={order.picture} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{order.itemName}</h2>
                                <p>Price: ${order.itemPrice}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default MyOrders;