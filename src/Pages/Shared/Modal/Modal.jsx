import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Modal = ({ data, setOpenModal }) => {
    const { user } = useContext(AuthContext);
    const handelBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const itemName = form.item.value;
        const itemPrice = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const bookingInfo = {
            name,
            email,
            itemName,
            itemPrice,
            phone,
            location,
            picture: data.picture,
        }

        fetch(`http://localhost:5000/order`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('item is booked')
                } else {
                    alert('item already added')
                }
            })
        setOpenModal()
    }


    return (
        <div>
            <input type="checkbox" id="publicModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="publicModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handelBooking} className='flex flex-col'>
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input defaultValue={user?.displayName} readOnly type="text" name='name' placeholder="name" className="input rounded-md input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input defaultValue={user?.email} readOnly type="text" name='email' placeholder="email" className="input rounded-md input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input defaultValue={data.name} readOnly type="text" name='item' placeholder="item name" className="input rounded-md input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Item price</span>
                        </label>
                        <input defaultValue={data.reselPrice} readOnly type="text" name='price' placeholder="item price" className="input rounded-md input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" placeholder="Enter your phone number" name='phone' className="input rounded-md input-bordered w-full" />
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" placeholder="Enter your location details" name='location' className="input rounded-md input-bordered w-full" />
                        <button className="input input-bordered w-full btn btn-ghost">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;