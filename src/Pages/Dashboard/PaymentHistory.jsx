import { useLoaderData } from "react-router-dom";
import AdminSectionTitle from "../Home/Shared/AdminSectionTitle";
import useAuth from "../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";


const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
            
        }
       
    })
    console.log(payments);
    return (
        <div>
            <AdminSectionTitle
            heading={'My Payment History'}
            ></AdminSectionTitle>
            <h2 className="text-3xl">Total Payment : {payments.length}</h2>
            <div className="overflow-x-auto">
                        <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                            <thead>
                                <tr className="bg-amber-400 text-white">
                                    <th className="py-4 px-6 text-lg text-left border-b">Email</th>
                                    <th className="py-4 px-6 text-lg text-left border-b">Transaction ID</th>
                                    <th className="py-4 px-6 text-lg text-left border-b">Total Price</th>
                                    <th className="py-4 px-6 text-lg border-b text-end">Payment Date</th>
                                    <th className="py-4 px-6 text-lg border-b text-end">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map(payment => <tr key={payment._id} className="hover:bg-gray-50 border-b transition duration-300">
                                        
                                        <td className="py-4 px-6 border-b text-xl font-medium">{payment.email}</td>
                                        <td className="py-4 px-6 border-b text-xl font-medium">{payment.transactionId}</td>
                                        <td className="py-4 px-6 border-b text-lg font-medium">${payment.price}</td>
                                        <td className="py-4 px-6 border-b text-end">{payment.date}</td>
                                        <td className="py-4 px-6 border-b text-end btn bg-amber-400 my-2 mx-4">{payment.status}</td>
                                        
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
        </div>
    );
};

export default PaymentHistory;