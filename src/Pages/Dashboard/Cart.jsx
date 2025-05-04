import { FaGooglePay, FaMoneyBill } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import SectionTitle from "../Home/Shared/SectionTitle";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        refetch();
                        if (res.data.deletedCount) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                        }
                    })


            }
        });
    }
    return (
        <div className="w-full">
            <SectionTitle
                subheading={'---My Cart---'}
                heading={'Wanna Add More?'}
            ></SectionTitle>
            <div className="w-50%  ">
                <div className="flex justify-around">
                    <h3 className="font-bold text-3xl">Total Orders: {cart.length}</h3>
                    <h3 className="font-bold text-3xl">Total Price: ${totalPrice} </h3>
                        { cart.length ? <Link
                        to='/dashboard/payment'
                        ><button  className=" flex  items-center justify-center text-xl btn bg-amber-400 "><FaMoneyBill></FaMoneyBill> Pay</button></Link> : 
                        <button disabled  className=" flex  items-center justify-center text-xl btn bg-amber-400 "><FaMoneyBill></FaMoneyBill> Pay</button>
                    }
                </div>
                <div>


                    <div className="overflow-x-auto">
                        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                            <thead>
                                <tr className="bg-amber-400 text-white">
                                    <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                                    <th className="py-4 px-6 text-lg text-left border-b">Itmes Name</th>
                                    <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                                    <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(order => <tr key={order._id} className="hover:bg-gray-50 border-b transition duration-300">
                                        <td className="py-4 px-4 flex justify-start">
                                            <img src={order.image} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                        </td>
                                        <td className="py-4 px-6 border-b text-xl font-medium">{order.name}</td>
                                        <td className="py-4 px-6 border-b text-lg font-medium">${order.price}</td>
                                        <td className="py-4 px-6 border-b text-end">
                                            <button onClick={() => handleDelete(order._id)} className="bg-red-700 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"><RiDeleteBin6Line></RiDeleteBin6Line></button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Cart;