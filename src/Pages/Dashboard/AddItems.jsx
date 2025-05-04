import AdminSectionTitle from "../Home/Shared/AdminSectionTitle";
import { ImSpoonKnife } from "react-icons/im";
import { useForm, } from "react-hook-form"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_upload_api =  `https://api.imgbb.com/1/upload?key=${image_hosting_key}`



const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit } = useForm()
    const onSubmit = async(data) => {
        console.log(data);
        const fileType = {image : data.image[0] }
        const res = await axiosPublic.post(image_upload_api, fileType, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
            
        } );
        if(res.data.success){
          const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log('with Image Url', menuRes.data)
            if(menuRes.data.insertedId){
                // Show Success Popup
                Swal.fire('Post Updated Successfully')
            }
        }
        console.log(res.data);

    }
    return (
        <div>
            <AdminSectionTitle
                heading={'Add an Item'}
                subHeading={'Whats New'}
            ></AdminSectionTitle>

            <div>



                <div className=" space-y-6 rounded-lg border bg-white p-10 shadow-lg  ">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-medium leading-none text-zinc-700 " htmlFor="name">
                                    Recipe name
                                </label>
                                <input

                                    {...register("name", { required: true })}
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                    id="name"
                                    placeholder="Enter your Recipe Name"
                                    name="name"
                                    type="text"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2 text-sm">
                                    <label className="text-sm font-medium leading-none text-zinc-700 " htmlFor="category">
                                        Category
                                    </label>
                                    <select  {...register("category", { required: true })} defaultValue="Pick an OS" className="select select-warning">
                                        <option disabled={true}>Pick a Category</option>
                                        <option>Salad</option>
                                        <option>Pizza</option>
                                        <option>Soup</option>
                                        <option>Dessert</option>
                                        <option>Drinks</option>
                                    </select>
                                </div>
                                <div className="space-y-2 text-sm">
                                    <label className="text-sm font-medium leading-none text-zinc-700 " htmlFor="price">
                                        Price
                                    </label>
                                    <input
                                        {...register("price", { required: true })}
                                        className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none dark:border-zinc-700"
                                        id="price"
                                        placeholder="Price"
                                        name="price"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-medium leading-none text-zinc-700 " htmlFor="recipe">
                                    Recipe Details
                                </label>
                                <textarea
                                    {...register("recipe", { required: true })}
                                    className="min-h-[80px] w-full rounded border px-3 py-2 leading-tight focus:outline-none focus:ring-1 dark:border-zinc-700"
                                    id="recipe"
                                    placeholder="what's in your mind"
                                    name="recipe"
                                />
                            </div>

                            <div>
                                <input {...register("image", { required: true })} type="file" className="file-input file-input-ghost" />
                            </div>

                           
                            <button type="submit" className=" flex  items-center gap-x-2 rounded-md bg-amber-400 px-4 py-2 text-white transition-colors hover:bg-black  "> <ImSpoonKnife></ImSpoonKnife> Add Item</button>
                        </form>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default AddItems;