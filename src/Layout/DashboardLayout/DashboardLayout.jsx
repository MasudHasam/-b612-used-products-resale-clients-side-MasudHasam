import React, { useContext } from 'react';
import { Footer } from 'react-daisyui';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const DashboardLayout = () => {
    const { user, loginUser } = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboardMenue" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboardMenue" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            loginUser?.options === 'Buyer' &&
                            <li><Link className='btn btn-outline mb-1 hover:mx-[1.5px] rounded-md' to='/dashboard'>My Orders</Link></li>
                        }
                        {
                            loginUser?.options === 'Seller' &&
                            <>
                                <li><Link className='btn btn-outline mb-1 hover:ml-[1.5px] rounded-md' to='/dashboard/addproduct'>Add Product</Link></li>
                                <li><Link className='btn btn-outline mb-1 hover:ml-[1.5px] rounded-md' to='/dashboard/myproducts'>My Product</Link></li>
                            </>
                        }
                        {
                            loginUser?.role === 'Admin' &&
                            <>
                                <li><Link className='btn btn-outline mb-1 hover:ml-[1.5px] rounded-md' to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link className='btn btn-outline mb-1 hover:ml-[1.5px] rounded-md' to='/dashboard/allbuyers'>All Buyers</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;