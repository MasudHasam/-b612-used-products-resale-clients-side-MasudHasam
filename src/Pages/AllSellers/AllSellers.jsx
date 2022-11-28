import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { CheckIcon } from '@heroicons/react/24/solid'
import TitleHooks from '../../TitleHook/TitleHook';

const AllUsers = () => {
    TitleHooks('all user')

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch(`https://used-product-resale-server-orcin.vercel.app/users/Seller`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })


    const handleSellerDelete = (seller) => {
        fetch(`https://used-product-resale-server-orcin.vercel.app/user/${seller._id}`, {
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


    //update seller status
    const updateSeller = (seller) => {
        // console.log(seller);
        fetch(`https://used-product-resale-server-orcin.vercel.app/seller/${seller._id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
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
                            <th>Status</th>
                            <th>Verify Seller</th>
                            <th>Delete Seller</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers?.map(seller =>

                                <tr key={seller._id}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div>
                                                <div className="font-bold">{seller.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{seller.email}</td>
                                    <td>{seller.options}</td>
                                    <td className='flex text-green-500'>{seller.status} {seller.status === 'Verified' && <CheckIcon className='w-5 h-5'></CheckIcon>}</td>
                                    <td><button onClick={() => updateSeller(seller)} className="btn btn-outline btn-success btn-xs">Verify</button></td>
                                    <th>
                                        <button onClick={(sellers) => handleSellerDelete(seller)} className="btn btn-outline btn-error btn-xs">Delete</button>
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