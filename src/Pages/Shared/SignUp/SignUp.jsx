import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleEmailSingUp, handleUserUpdate, saveUser } = useContext(AuthContext)
    const navigaate = useNavigate();

    const handelSignUp = (data) => {
        // console.log(data);
        handleEmailSingUp(data.email, data.password)
            .then(result => {
                const user = result.user;
                handleUserUpdate({ displayName: data.name })
                if (user) {
                    const userInfo = {
                        name: data.name,
                        email: user.email,
                        options: data.options
                    }
                    saveUser(userInfo)
                    navigaate('/')
                }
                console.log(user);
            })
            .catch(err => console.log(err));
    }





    return (
        <div className='my-10'>
            <h1 className='text-3xl text-green-400 text-center'>Please SignUp</h1>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit(handelSignUp)} className=' lg:w-96 shadow-2xl px-2 py-2 bg-slate-500 rounded-md mt-2'>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full rounded-md" {...register("name", { required: 'Please Enter Your Name' })} placeholder="name" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full rounded-md" {...register("email", { required: 'Please Enter Your Email' })} placeholder="email" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full rounded-md" {...register("password", { required: 'Please Enter Your Password', minLength: { value: 6, message: 'Password must be atleast 6 charecter' } })} placeholder="password" />
                    </div>
                    <div className="form-control w-full rounded-md">
                        <label className="label">
                            <span className="label-text text-white">Seller/Buyer</span>
                        </label>
                        <select {...register('options')} className="select input-bordered w-full mb-3">
                            <option>Seller</option>
                            <option selected>Buyer</option>
                        </select>
                    </div>
                    <input className='btn btn-outline bg-white  rounded-md w-full' value='Sign Upp' type="submit" />
                    {/* {
                    loginError && <p className='text-red-500'>{loginError}</p>
                } */}
                    <p className='text-center text-white'>Log In if You <Link to='/login' className='text-sky-300'><small>Already have an account</small></Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;