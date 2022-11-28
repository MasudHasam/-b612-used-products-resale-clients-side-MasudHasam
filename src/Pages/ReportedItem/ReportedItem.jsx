import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const ReportedItem = () => {

    const { user } = useContext(AuthContext);

    const { data: reportedItems = [], refetch } = useQuery({
        queryKey: ['reporteditems'],
        queryFn: async () => {
            const res = await fetch(`https://used-product-resale-server-orcin.vercel.app/reportedItems`)
            const data = await res.json();
            return (data);
        }
    })

    const deleteReportedItem = (id) => {
        fetch(`https://used-product-resale-server-orcin.vercel.app/reportedItems/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch()
            })
    }

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-semibold italic text-center text-orange-500'>All Reported Item</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    reportedItems?.map(reportedItem =>

                        <div key={reportedItem._id} className="card w-full bg-base-100 shadow-2xl">
                            <figure className="px-10 pt-10">
                                <img className=' w-72 h-60 rounded-xl' src={reportedItem.picture} alt="Shoes" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{reportedItem.name}</h2>
                                <div className="card-actions">
                                    <button onClick={() => deleteReportedItem(reportedItem._id)} className="btn btn-primary">Delete Item</button>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default ReportedItem;