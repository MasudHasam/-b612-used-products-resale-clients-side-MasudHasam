import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products/${user?.email}`)
            const data = await res.json();
            return data;
        }
    })


    const advertiseIt = (product) => {
        fetch(`http://localhost:5000/product/${product._id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount) {
                    toast.success('Your product is in advertise now')
                } else {
                    toast.error('already added')
                }
            })
    }

    const deleteProduct = (id) => {
        fetch(`http://localhost:5000/product/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully')
                }
                refetch()
            })

    }




    return (
        <div className='my-10 flex flex-col gap-8'>
            <h1 className='text-3xl text-green-400 italic text-center'>All of my added products</h1>
            {
                products?.map(product =>

                    <div key={product._id} className="card lg:card-side px-2 lg:px-0 bg-base-100 shadow-xl">
                        <figure><img className='w-[385px] h-[290px]' src={product.picture} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-semibold"> {product.name}</h2>
                            <p className='text-xl'>Details: {product.details}</p>
                            <p className='mt-0 pt-0'>Price: {product.details}</p>
                            <p className='mt-0 pt-0'>Condition: {product.condition}</p>
                            <p className='mt-0 pt-0'>Status: {product.status}</p>
                            <div className="card-actions justify-start">
                                <button onClick={() => advertiseIt(product)} className="btn btn-primary">Advertise It</button>
                                <button onClick={() => deleteProduct(product._id)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                        <Toaster></Toaster>
                    </div>

                )
            }
        </div>
    );
};

export default MyProducts;