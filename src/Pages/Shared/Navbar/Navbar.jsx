import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import logo from '../../../Assets/giveandtake.png'
import { AuthContext } from '../../../Context/AuthProvider';

const Navbar = () => {
    const { user, handleLogOut, loginUser } = useContext(AuthContext);



    const menue = <>
        <li><Link className='btn-sm btn-outline mr-0 lg:mr-2 rounded-md' to='/'>Home</Link></li>
        <li><Link className='btn-sm btn-outline rounded-md' to='/blog'>Blog</Link></li>
        {
            user?.email &&
            // && loginUser?.options === 'Seller'
            <>
                <li><Link className='btn-sm btn-outline rounded-md hover:text-pink-500' to='/dashboard'>Dashboard</Link></li>
            </>
        }
    </>


    //sign out function
    const handleSignOut = () => {
        handleLogOut()
            .then(() => { })
            .catch(() => { })
    }


    return (
        <div>
            <div className="navbar bg-slate-300 px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menue}

                        </ul>
                    </div>
                    <div className='flex'>
                        <Link to='/'><img className='w-12 h-12 rounded-full' src={logo} alt="" /></Link>
                        <Link to='/' className="btn btn-ghost normal-case text-xl">Give & Take</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menue}

                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ?
                            <>
                                <Link onClick={handleSignOut} className="btn btn-outline btn-sm">Log Out</Link>
                                {user?.photoURL && <img className='rounded-full w-10 h-10 ml-3' src={user?.photoURL} alt="profile" />}
                            </>
                            :
                            <Link to='/login' className="btn btn-outline btn-sm">Login</Link>
                    }
                    <label htmlFor="dashboardMenue" tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;