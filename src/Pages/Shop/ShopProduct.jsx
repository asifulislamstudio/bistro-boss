import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
const ShopProduct = ({item}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();
    const axiosSecure = useAxiosSecure();
    const { image, name, recipe, price, category, _id } = item;
    const {user} =  useAuth();
    const handleAddToCart = () => {
        if(user && user.email){
            const cartItem = {
                menuId : _id,
                email: user.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    refetch();
                    Swal.fire({
                        title: "Successfuly Add to Cart",
                        text: "Hurray Your Prodct Added Successfuly",
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Show My Cart"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate('/dashboard/cart')
                        }
                      });
                }
            })
        }else{
            Swal.fire({
                title: "Your Not Log in",
                text: "Please Login First to Add to Cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state :  {from : location}})
                }
              });
        }
    } 
    return (
        <div className="w-full  md:max-w-[340px] space-y-3 rounded-xl bg-white p-4 shadow-lg ">
            <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    {/* love  */}
                    <div className="flex items-center">
                        <svg width={30} className="cursor-pointer fill-transparent stroke-white stroke-2 hover:fill-red-500 hover:stroke-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z"></path></svg>
                    </div>
                    <button className="rounded-xl bg-amber-400 px-3 py-1 font-medium text-white duration-200 hover:bg-[#0095FF]/90">30% off</button>
                </div>
                <img width={400} height={400} className="rounded-lg bg-black/40 object-cover" src={image} alt="card navigate ui" />
            </div>
            <div className="space-y-2 font-semibold">
                <h6 className="text-sm md:text-base lg:text-lg">{name}</h6>
                <p className="text-xs font-semibold text-gray-400 md:text-sm">{recipe.slice(0,60)}</p>
            </div>
            
            <div className="text-sm flex items-center justify-center md:text-base ">
            <div>
                <h3 className="text-xl font-md mr-4"> Price: {price} BDT</h3>
            </div>
                <button onClick={handleAddToCart} className="rounded-lg border-2 border-amber-400 bg-transparent px-4 py-2  font-semibold text-amber-400 duration-300 hover:scale-95 hover:border-b-2 hover:border-b-amber-400 hover:bg-black">Add to Cart</button>
            </div>
        </div>
    );
};

export default ShopProduct;