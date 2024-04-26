import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
//react icons
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import SocialMediaLogin from '../../components/SocialMediaLogin/SocialMediaLogin';
import { useLocation, useNavigate } from 'react-router-dom';



const Login = () => {
    const [showPass, setShowPass] = useState(false)
    const { signInUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Login Successful. Redirecting...", {
                    autoClose: 2000
                })
                setTimeout(() => {
                    navigate(location.state ? location.state : "/")
                }, 3000);
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 border container mx-auto">
            <ToastContainer />
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered" {...register("password", { required: true })} />
                    <span className='mt-0 mr-0 ml-auto mb-0 relative bottom-8 right-4' onClick={() => setShowPass(!showPass)}>
                        {
                            showPass ? <FaEye /> : <FaEyeSlash />
                        }
                    </span>
                    {errors.password && <span className="text-red-600">This field is required</span>}
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-3">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className='form-control'>
                <p className="text-center text-sm mb-2">-Or Sign In Using-</p>
                <SocialMediaLogin />
            </div>
        </div>
    )
}

export default Login