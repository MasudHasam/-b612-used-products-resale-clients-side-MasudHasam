import React from 'react';

const Item = ({ data, setOpenModal, openMOdal }) => {

    const { categoryID, condition, details, purchesYear, phone, location, name, originalPrice, picture, postedTime, reselPrice, selerName, totalUses, _id } = data;
    return (
        <div>
            <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                <figure><img className='h-64 w-full' src={picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name ? name : 'N/A'}
                        <div className="badge badge-secondary bg-slate-400 border-none"><small>{location}</small></div>
                    </h2>
                    <p>Original price: ${originalPrice ? originalPrice : 'N/A'}</p>
                    <p>Resel price: ${reselPrice ? reselPrice : 'N/A'}</p>
                    <p>Total Uses: {totalUses ? totalUses : 'N/A'}<small>months</small></p>
                    <p>Posted Time: {postedTime ? postedTime : 'N/A'}</p>
                    <p>Condition: {condition ? condition : 'N/A'}</p>
                    <p>Details: <small>{details ? details.slice(0, 40) : 'N/A'}...</small></p>
                    <p>Purches Year: {purchesYear ? purchesYear : 'N/A'}</p>
                    <p>Phone: {phone ? phone : 'N/A'}</p>
                    <p>Seller Name: <span className='text-xl '>{selerName}</span><small className='text-xm text-green-500 font-semibold'>verified</small></p>
                    <label onClick={() => setOpenModal(data)} htmlFor="publicModal" className="btn btn-outline ">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Item;