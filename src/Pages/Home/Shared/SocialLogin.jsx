import { GoogleAuthProvider } from "firebase/auth";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { GrGoogle } from "react-icons/gr";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const SocialLogin = () => {
    const {loginWithGoogle} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        loginWithGoogle(provider)
        .then(res => {
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data);
                toast.success(res.data.message)
                navigate('/');
            })
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-x-2 btn btn-wide  my-8 btn-neutral"><GrGoogle></GrGoogle> Sign In</button>
        </div>
    );
};

export default SocialLogin;