import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllUsers = () => {

    const { data: options = [] } = useQuery({
        queryKey: ['options'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/Seller`)
            const data = await res.json();
            return data;
        }
    })

    console.log(options);

    return (
        <div className='my-[22px]'>
            <h1 className='mb-3 text-center text-3xl font-bold text-teal-400'>All Sellers</h1>
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
                            options?.map(option =>

                                <tr key={option._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{option.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{option.email}</td>
                                    <td>{option.options}</td>
                                    <th>
                                        <button className="btn btn-outline btn-error btn-xs">Delete</button>
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