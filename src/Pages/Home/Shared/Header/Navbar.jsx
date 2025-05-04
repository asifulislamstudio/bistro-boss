import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../../hooks/useCart";

const Navbar = () => {
    
    const navigate = useNavigate();
    const { user, logOutUser, loading } = useContext(AuthContext)
    const [cart] = useCart();

    const handlelogOutUser = () => {
        if(loading){
            return <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
        }
        logOutUser()
            .then(res => {
                toast.success('User LogOut Successfuly')
                localStorage.removeItem('access-token');
                navigate('/')
            })
    }

    const NavMenu = <>
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/contact">CONTACT US</NavLink></li>
        <li><NavLink to="/dashboard">DASHBOARD</NavLink></li>
        <li><NavLink to="/menu"> OUR MENU</NavLink></li>
        <li><NavLink to="/shop/salad">OUR SHOP</NavLink></li>
    </>
    return (
       <div>
         <div className="navbar  fixed z-10 bg-gray-950/30 text-white shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {NavMenu}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Box</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavMenu}
                </ul>
            </div>
            <div className="navbar-end hidden md:flex">
               <Link to="dashboard/cart">
               <div className="relative w-fit mr-2">
                    <FaShoppingCart className="text-3xl"></FaShoppingCart>
                    <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-center text-[10px] text-white">{cart.length}</span>
                </div>
               </Link>
                {
                    user ? <div className="flex gap-x-2">   <img
                        width={500}
                        height={500}
                        className="size-10 rounded-full bg-slate-500 object-cover"
                        src={user.photoURL}
                        alt="avatar Asiful Islam"
                    /> <button className="btn" onClick={handlelogOutUser}>logout</button></div> : <button className="btn"><Link to='/login'>Login</Link></button>
                }
            </div>
        </div>
       </div>
    );
};

export default Navbar;