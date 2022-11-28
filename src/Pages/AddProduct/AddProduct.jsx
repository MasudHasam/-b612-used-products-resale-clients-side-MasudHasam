import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import 'react-toastify/dist/ReactToastify.css';
import TitleHooks from '../../TitleHook/TitleHook';


const AddProduct = () => {
    TitleHooks('add product')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const handleAddProduct = (data) => {

        data.email = user?.email;
        data.selerName = user?.displayName;
        data.status = 'Unsold';

        fetch('https://used-product-resale-server-orcin.vercel.app/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    navigate('/dashboard/myproducts')
                }
            })
    }


    return (
        <div className=''>
            <h1 className='text-3xl font-semibold italic text-red-400 text-center mt-4'>Add a new product</h1>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit(handleAddProduct)} className=' lg:w-96 shadow-2xl px-2 py-2 bg-slate-500 rounded-md mt-2'>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Picture</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("picture",)} placeholder="photo url" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Product name</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("name",)} placeholder="name" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Original price</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("originalPrice",)} placeholder="original price" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Resel price</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("reselPrice",)} placeholder="resel price" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Condition</span>
                        </label>
                        <select {...register('condition')} className="select input-bordered w-full mb-3">
                            <option selected>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Phone</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("phone",)} placeholder="please enter your phone number" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Location</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("location",)} placeholder="please enter your current location" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Category</span>
                        </label>
                        <select {...register('categoryID')} className="select input-bordered w-full mb-3">
                            <option selected>headphones</option>
                            <option>guitar</option>
                            <option>speaker</option>
                            <option>others</option>
                        </select>
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Details</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("details",)} placeholder="details about your product" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Purches Year</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("purchesYear",)} placeholder="mention purches year" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Total uses</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("totalUses",)} placeholder="mention purches year" />
                    </div>
                    <div className="form-control w-full rounded-md mb-3">
                        <label className="label">
                            <span className="label-text text-white">Posted time</span>
                        </label>
                        <input required type="text" className="input input-bordered w-full rounded-md" {...register("postedTime",)} placeholder="mention purches year" />
                    </div>
                    <input required className='btn btn-outline bg-white  rounded-md w-full' value='Add new Product' type="submit" />
                    {/* {
                    loginError && <p className='text-red-500'>{loginError}</p>
                } */}
                </form>
            </div>
        </div>
    );
};

export default AddProduct;