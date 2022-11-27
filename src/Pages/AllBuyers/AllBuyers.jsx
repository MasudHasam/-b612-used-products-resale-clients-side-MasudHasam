import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllBuyers = () => {
    const { data: Buyers = [], refetch } = useQuery({
        queryKey: ['Buyers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/Buyer`)
            const data = await res.json();
            return data;
        }
    })

    const handleBuyerDelete = (buyer) => {
        fetch(`http://localhost:5000/user/${buyer._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('user deleted successfully')
                }
                refetch()
            })
    }

    return (
        <div className='my-[22px]'>
            <h1 className='mb-3 text-center text-3xl font-bold text-teal-400'>All Buyers</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Identity</th>
                            <th>Delete Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Buyers?.map(buyer =>

                                <tr key={buyer._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{buyer.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.options}</td>
                                    <th>
                                        <button onClick={() => handleBuyerDelete(buyer)} className="btn btn-outline btn-error btn-xs">Delete</button>
                                    </th>
                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;