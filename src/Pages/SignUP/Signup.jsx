import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} =  useContext(AuthContext)
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
        .then(res => {
            toast.success('User Created Successfuly')
            navigate('/')
            updateUserProfile(data.displayName, data.photoURL)
            .then(res => {
                reset();
                toast.success('User Profile Info Updated')
            })
            .catch(err => {
                toast.error(err.code)
            })
        })
        .catch( err => {
            toast.error('Something is Wrong', err.code)
        })
        
    }

    
   
    return (
        <div className="max-w-screen-2xl mx-auto  h-screen flex items-center justify-center">
            <div className="max-w-md space-y-6 rounded-lg border bg-white p-10 shadow-lg  ">
                <div className="flex flex-col space-y-1">
                    <h3 className="text-3xl font-bold tracking-tight">Sign Up</h3>
                    <p className="text-sm text-zinc-500 ">Please fill in the form to create an account.</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2 text-sm">
                                <label className="text-sm font-medium leading-none text-zinc-700 " htmlFor="displayName">
                                    First Name
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none "
                                    id="displayName"
                                    placeholder="Enter first name"
                                    name="displayName"
                                    {...register("displayName")}
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 " htmlFor="email">
                                Email
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none "
                                id="email"
                                placeholder="Enter your email"
                                name="email"
                                {...register("email" , { required: true })}
                                type="email"
                            />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 " htmlFor="photoURL">
                                Photo URL
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none "
                                id="email"
                                placeholder="Enter Photo URL"
                                name="photoURL"
                                {...register("photoURL" , { required: true })}
                                type="url"
                            />
                            {errors.photoURL && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="space-y-2 text-sm">
                            <label className="text-sm font-medium leading-none text-zinc-700 " htmlFor="password_">
                                Password
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border px-3 py-2  focus-visible:outline-none "
                                id="password_"
                                placeholder="password"
                                name="password"
                                {...register("password", { pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ })}
                                type="password"
                            />
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Create A Strong Passwrod must be One Number, One Uppercase later, One Lowercaser Letter</span>}
                        </div>
                      <div>
                        <input className="btn w-full" type="submit" value="Sign Up" />
                      </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;