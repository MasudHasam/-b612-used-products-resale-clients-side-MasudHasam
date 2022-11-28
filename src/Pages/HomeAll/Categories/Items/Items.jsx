import { useQueries } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TitleHooks from '../../../../TitleHook/TitleHook';
import Modal from '../../../Shared/Modal/Modal';
import Item from '../Item/Item';

const Items = () => {
    TitleHooks('items')
    const data = useLoaderData();
    const [openMOdal, setOpenModal] = useState(false);


    const reporteItem = (product) => {
        fetch(`https://used-product-resale-server-orcin.vercel.app/products/${product._id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount) {
                    alert('Product Reported Successfully')
                } else {
                    alert('already in report list')
                }
            })
    }

    return (
        <div className='my-12'>
            <h1 className='text-4xl italic text-orange-400'>All Products in <span className='text-green-400'>{data[0].categoryID}</span> Category:</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4'>
                {
                    data?.map(sData => <Item
                        key={sData._id}
                        data={sData}
                        setOpenModal={setOpenModal}
                        openMOdal={openMOdal}
                        reporteItem={reporteItem}
                    ></Item>)
                }
            </div>
            {
                openMOdal &&
                <Modal
                    data={openMOdal}
                    setOpenModal={setOpenModal}
                ></Modal>
            }
        </div>
    );
};

export default Items;