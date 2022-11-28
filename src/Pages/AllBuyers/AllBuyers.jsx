import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';

const AllBuyers = () => {
    const notify = () => toast('Here is your toast.');
    const { data: Buyers = [], refetch } = useQuery({
        queryKey: ['Buyers'],
        queryFn: async () => {
            const res = await fetch(`https://used-product-resale-server-orcin.vercel.app/users/Buyer`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    const handleBuyerDelete = (buyer) => {
        fetch(`https://used-product-resale-server-orcin.vercel.app/user/${buyer._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('user deleted successfully')
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
                                            <div>
                                                <div className="font-bold">{buyer.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.options}</td>
                                    <th>
                                        <button onClick={() => handleBuyerDelete(buyer)} className="btn btn-outline btn-error btn-xs">Delete</button>
                                        <Toaster />
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