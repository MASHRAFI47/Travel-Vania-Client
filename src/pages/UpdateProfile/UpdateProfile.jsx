import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user, updateUserProfile } = useContext(AuthContext)
    console.log(user)
    const [showPass, setShowPass] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { fullName, photoURL } = data
        updateUserProfile(fullName, photoURL)
            .then(() => {
                toast.success("Profile Updated")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100 mx-auto border mb-20 mt-10">
            <Helmet>
                <title>Travel Vania | Update Profile</title>
            </Helmet>
            <ToastContainer />
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-3xl text-center font-bold" data-aos="fade-down">Update Profile</h1>
                <div className="form-control" data-aos="fade-right" data-aos-delay="100">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" defaultValue={user ? user.email : ""} className="input input-bordered" {...register("email")} disabled />
                </div>
                <div className="form-control" data-aos="fade-right" data-aos-delay="200">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPass ? "text" : "password"} placeholder="password" className="input input-bordered" {...register("password")} disabled />
                    <span className="mt-0 mr-0 ml-auto mb-0 relative bottom-8 right-4" onClick={() => setShowPass(!showPass)}>
                        {/* {
                            showPass ? <FaEye /> : <FaEyeSlash />
                        } */}
                    </span>
                </div>
                <div className="form-control" data-aos="fade-right" data-aos-delay="300">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="full name" defaultValue={user ? user.displayName : ""} className="input input-bordered" {...register("fullName", { required: true })} />
                    {errors.fullName && <span>Update Required</span>}
                </div>
                <div className="form-control" data-aos="fade-right" data-aos-delay="400">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photo url" defaultValue={user ? user.photoURL : ""} className="input input-bordered" {...register("photoURL", { required: true })} />
                    {errors.photoURL && <span>Update Required</span>}
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-success text-white border-none bg-[#F2611C]">Update Profile</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateProfile