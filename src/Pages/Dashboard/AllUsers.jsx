import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../Home/Shared/SectionTitle";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import AdminSectionTitle from "../Home/Shared/AdminSectionTitle";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";
import toast from "react-hot-toast";


const AllUsers = () => {


    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

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
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
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

    // Make Admn Handle
     const handleMakeAdmin = user => {
        console.log(user._id);
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then( res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    title: "Admin Created",
                    text:  `${user.email} is now Admin`,
                    icon: "question"
                  });
            }
        })
     }


    return (
        <div className="">
            <div>
                <AdminSectionTitle
                    subHeading={'---How many??---'}
                    heading={'MANAGE ALL USERS'}
                ></AdminSectionTitle>
                <div className=" w-[1200px] py-8 rounded-2xl px-16 mx-auto bg-gray-800/30">
                    <h2 className="font-bold text-3xl ">Total User : {users.length}</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-[90%]    shadow-md border mx-auto border-gray-100 my-6">
                            <thead>
                                <tr className="bg-amber-400 text-white">
                                    <th className="py-4 px-6 text-lg text-left border-b">User Name</th>
                                    <th className="py-4 px-6 text-lg text-left border-b">User Email</th>
                                    <th className="py-4 px-6 text-lg text-left border-b">Role</th>
                                    <th className="py-4 px-6 text-lg border-b text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(user => <tr key={user._id} className="hover:bg-gray-50 border-b transition duration-300">

                                        <td className="py-4 px-6 border-b text-xl font-medium">{user.name}</td>
                                        <td className="py-4 px-6 border-b text-xl font-medium">{user.email}</td>
                                        <td className="py-4 px-6 border-b text-lg font-medium">
                                            {
                                                user.role === 'admin' ? 'Admin'
                                                :                           
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-success font-bold text-xl">
                                                <GrUserAdmin></GrUserAdmin>
                                            </button>
                                             }
                                        </td>
                                        <td className="py-4 px-6 border-b text-end">
                                            <button onClick={() => handleDelete(user._id)} className="bg-red-700 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md"><RiDeleteBin6Line></RiDeleteBin6Line></button>
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

export default AllUsers;