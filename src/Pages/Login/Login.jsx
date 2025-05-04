import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../Home/Shared/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const [showPass, setShowPass] = useState(true)
    const {loginUser} = useContext(AuthContext)
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    console.log(from);

    useEffect( () => {
        loadCaptchaEnginge(3);
    } ,[])

    const handleLogin = e => {
           e.preventDefault();
           const form = e.target;
           const email = form.email.value;
           const password = form.password.value;
           console.log(email, password);
           loginUser(email, password)
           .then(res => {
            toast.success('User Created Successfuly')
            navigate(from, {replace: true});
           } )
           .catch(err => {
            toast.error('Wrong Password or Email')
           })
    }
    const handleCapthca = () => {
        const user_capthca_value = captchaRef.current.value;
        console.log(user_capthca_value);
        if(validateCaptcha(user_capthca_value)){
            captchaRef.current.value = '';
            setDisabled(false)
            toast.success('captcha Validate')
        }else{
                setDisabled(true);
                toast.error('there was an error')
        }
    }
    return (
        <div className="flex justify-center items-center max-w-screen-2xl mx-auto h-screen">
            <div className="max-w-3xl bg-white p-6 shadow-md sm:px-8 sm:py-10 lg:px-12 lg:py-16 border rounded-2xl ">
            <div className="flex flex-col justify-between space-x-0 sm:flex-row sm:space-x-12">
                <div className="mb-8 w-full sm:mb-0 sm:w-1/2">
                    {/* Left side form */}
                    <h2 className="mb-6 text-3xl font-semibold tracking-tight">Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4 flex flex-col space-y-4">
                            <input 
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none  focus:ring-1" placeholder="Username" 
                            type="text" 
                            name="email"
                            />

                            
                            <div className='relative'>
                            <input 
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none  focus:ring-1" placeholder="Password" 
                            type= {showPass ? 'text' : 'password'} 
                            name="password"
                            />
                            <span onClick={() => setShowPass(!showPass)} className='btn btn-ghost text-xl absolute bottom-[0px] right-[0px]'>{showPass ?  <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                            </div>
                        </div>
                        <div>
                            {/* Capthca */}
                        < LoadCanvasTemplate />
                        <input 
                            ref={captchaRef}
                            className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none  focus:ring-1" placeholder="Write Captcha" 
                            type="text"
                            name="captcha"
                            />
                            <button type='button' onClick={handleCapthca}   className='btn btn-sm w-full'>Validate</button>
                        </div>
                        <div className="mb-6 mt-4 flex items-center space-x-2 accent-sky-600">
                            <input type="checkbox" id="keep_signed_in" />
                            <label className="select-none text-sm font-medium" htmlFor="keep_signed_in">
                                Keep me signed in
                            </label>
                        </div>
                        <input disabled={disabled} className="inline-flex h-10 w-full items-center justify-center rounded-md bg-amber-400 text-black px-4 py-2 text-sm font-medium uppercase  hover:bg-zinc-700" type="submit" value="Submit" />
                    </form>
                    <p className="mt-6 flex gap-1 text-sm">
                        Did you
                        <a className="text-sky-500 underline" href="#">
                            forget your password?
                        </a>
                    </p>
                </div>
                {/* Right side content */}
                <div className="w-full sm:w-1/2">
                    <p className="mb-6 text-sm">If you don&apos;t already have an account click the button below to create your account.</p>
                    <button className="mb-2 inline-flex h-10 w-full items-center justify-center rounded-md bg-zinc-800 px-4 py-2 text-sm font-medium uppercase text-white hover:bg-zinc-700">
                        <Link to='/signup'>Create Account</Link>
                    </button>
                    <p className="my-4 text-center">OR</p>
                   <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;