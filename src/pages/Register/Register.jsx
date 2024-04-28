import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Register = () => {
    const [showPass, setShowPass] = useState(false)
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, fullName, photoURL } = data;

        if (password.length < 6) {
            toast.warn("Password should contain at least 6 characters")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.warn("Password must contain at least one uppercase")
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.warn("Password must contain at least one lowercase")
            return;
        }

        createUser(email, password)
            .then(() => {
                updateUserProfile(fullName, photoURL)
                    .then(() => {
                        const user = { email }
                        fetch(`http://localhost:4000/users`, {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(user)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    console.log('user saved in collection')
                                }
                            })
                        toast.success("Registration successful. Redirecting...", {
                            autoClose: 2000
                        })
                        setTimeout(() => {
                            navigate('/')
                        }, 3000);
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 border container mx-auto">
            <Helmet>
                <title>Travel Vania | Register</title>
            </Helmet>
            <ToastContainer />
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-3xl font-bold text-center" data-aos="zoom-in">Register</h1>
                <div className="form-control" data-aos="fade-right" data-aos-delay="100">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="full name" className="input input-bordered" {...register("fullName", { required: true })} />
                    {errors.fullName && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="form-control" data-aos="fade-right" data-aos-delay="200">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photo url" className="input input-bordered" {...register("photoURL", { required: true })} />
                    {errors.photoURL && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="form-control" data-aos="fade-right" data-aos-delay="300">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                    {errors.email && <span className="text-red-600">This field is required</span>}
                </div>
                <div className="form-control" data-aos="fade-right" data-aos-delay="400">
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
                <div className="form-control mt-6">
                    <button className="btn btn-success text-white border-none bg-[#F2611C]">Register</button>
                </div>
            </form>
        </div>
    )
}

export default Register