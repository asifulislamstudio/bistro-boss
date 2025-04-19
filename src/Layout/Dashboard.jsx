import React from 'react';
import { FaHome, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { RiUserStarFill } from "react-icons/ri";
import { GrSchedule, GrSchedules } from "react-icons/gr";
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
    const {user} = useAuth()
    return (
        <div className='w-screen h-screen flex'>
            <div className=' flex-1/5 bg-amber-400'>
                <h1 className='text-center my-2 font-Poppins font-bold text-4xl uppercase mt-4'>{user?.email ? <>hello,{user.name}</> : 'Dashboard' }</h1>
                <ul className='flex  flex-col   py-4 font-semibold text-xl'> 
                    <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                        <FaHome></FaHome>
                        <NavLink to="/">User Home </NavLink></li>
                    <li className=' text-center active:bg-blue-600 focus:bg-blue-400  py-4 flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white '>
                        <FaShoppingCart></FaShoppingCart>
                        <NavLink to="/dashboard/cart">My Cart</NavLink></li>
                    <li className=' flex justify-center active:bg-blue-600  items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                        <FaWallet></FaWallet>
                        <NavLink to="/">Payment History </NavLink></li>
                    <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center  py-4 '>
                     <GrSchedules ></GrSchedules>
                        <NavLink to="/">Reservation </NavLink></li>
                    <li className=' flex border-t-2 justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center  py-4 '>
                        <RiUserStarFill></RiUserStarFill>
                        <NavLink to="/">Add Review </NavLink></li>
                    <li className=' flex justify-center items-center gap-x-2 hover:bg-amber-900 hover:text-white text-center border-y-2 py-4 '>
                        <GrSchedule></GrSchedule>
                        <NavLink to="/">My Booking </NavLink></li>
                </ul>
            </div>
            <div className='flex-4/5 px-8 pt-4'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;