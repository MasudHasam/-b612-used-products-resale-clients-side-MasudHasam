import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/Seller`)
            const data = await res.json();
            return data;
        }
    })


    const handleSellerDelete = (seller) => {
        fetch(`http://localhost:5000/user/${seller._id}`, {
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
            <h1 className='mb-3 text-center text-3xl font-bold text-teal-400'>All Sellers</h1>
            <div className="overflow-x-auto w-11/12 mx-auto">
                <table className="table w-11/12">
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
                            sellers?.map(sellers =>

                                <tr key={sellers._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{sellers.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{sellers.email}</td>
                                    <td>{sellers.options}</td>
                                    <th>
                                        <button onClick={() => handleSellerDelete(sellers)} className="btn btn-outline btn-error btn-xs">Delete</button>
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

export default AllUsers;