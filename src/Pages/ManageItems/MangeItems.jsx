import { useQuery } from "@tanstack/react-query";
import AdminSectionTitle from "../Home/Shared/AdminSectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MangeItems = () => {
    const axiosSecure = useAxiosSecure();
    const { data: menus = [], refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menu');
            return res.data;
        }
    })
    const handleDelete = (menu) => {
        console.log(menu._id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${menu._id}`);
                refetch();
                if (res.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }


            }
        });
    }
    return (
        <div>
            <AdminSectionTitle
                heading={'Manage All Items'}
                subHeading={'Hurry Up!'}
            ></AdminSectionTitle>
            <div className="border px-4 w-[1000px] bg-gray-700/40">
                <h2 className="font-bold text-2xl">Total items:{menus.length} </h2>
                <div>


                    <div className="overflow-x-auto">
                        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                            <thead>
                                <tr className="bg-amber-400 text-white">
                                    <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                                    <th className="py-4 px-6 text-lg text-left border-b">Itmes Name</th>
                                    <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                                    <th className="py-4 px-6 text-lg text-left border-b">Edit</th>
                                    <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menus.map(menu => <tr key={menu._id} className="hover:bg-gray-50 border-b transition duration-300">
                                        <td className="py-4 px-4 flex justify-start">
                                            <img src={menu.image} alt="table navigate ui" className="h-16 w-16 object-cover bg-gray-300" />
                                        </td>
                                        <td className="py-4 px-6 border-b text-xl font-medium">{menu.name}</td>
                                        <td className="py-4 px-6 border-b text-lg font-medium">${menu.price}</td>
                                        <td className="py-4 px-6 border-b text-lg font-medium"><button className="btn hover:bg-amber-400 "><Link to={`/dashboard/editItem/${menu._id}`}><FaRegEdit></FaRegEdit></Link></button></td>
                                        <td className="py-4 px-6 border-b text-end">
                                            <button onClick={() => handleDelete(menu)} className="bg-red-700 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"><RiDeleteBin6Line></RiDeleteBin6Line></button>
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

export default MangeItems;