import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleGoogleLogIn } = useContext(AuthContext);
    const handelLogin = (data) => {
        console.log(data);
    }

    const handleGoogleSignIn = () => {
        handleGoogleLogIn()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className=' my-10'>
            <h1 className='text-center text-2xl text-sky-400'>Please login</h1>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit(handelLogin)} className=' lg:w-96 shadow-2xl px-2 py-2 bg-slate-500 rounded-md mt-2'>
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
                        <label className="label">
                            <span className="label-text text-white">forget password</span>
                        </label>
                    </div>
                    <input className='btn btn-outline bg-white  rounded-md w-full' value='Log In' type="submit" />
                    {/* {
                    loginError && <p className='text-red-500'>{loginError}</p>
                } */}
                    <p className='text-center text-white'>New to doctors portal? <Link to='/signup' className='text-sky-300'><small>Create New Account</small></Link></p>
                    <div className="divider text-white">OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline w-full bg-green-400 rounded-md'>Sign In With Google</button>
                </form>
            </div>
        </div>
    );
};

export default Login;