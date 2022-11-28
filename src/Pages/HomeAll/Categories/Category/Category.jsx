import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query'
import axios from "axios";

const Category = () => {
    const [categorys, setCategorys] = React.useState();
    useEffect(() => {
        axios.get('https://used-product-resale-server-orcin.vercel.app/category')
            .then((response) => setCategorys(response.data))
    }, [])

    // const { data: categorys = [] } = useQuery({
    //     queryKey: ['category'],
    //     queryFn: async () => {
    //         const res = await fetch('https://used-product-resale-server-orcin.vercel.app/category')
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    return (
        <div className='mb-8'>
            <h1 className='text-4xl text-center italic text-sky-600 mt-14 mb-4'>Find Your Fantasy</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
                {
                    categorys?.map(category =>
                        <Link key={category._id} to={`/items/${category.categoryID}`} className=''>
                            <div className="card w-11/12 mx-auto lg:hover:w-[93%] h-44  bg-base-100 shadow-2xl image-full">
                                <figure><img src={category.picture} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className=" text-3xl font-bold flex items-center justify-center mt-10">{category.name}</h2>
                                </div>
                            </div>
                        </Link>

                    )
                }
            </div>
        </div>
    );
};

export default Category;