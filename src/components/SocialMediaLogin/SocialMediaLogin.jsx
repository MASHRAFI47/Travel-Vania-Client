import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"
import { ToastContainer, toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"


const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signInWithGoogle } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                toast.success("Login Successful. Redirecting...", {
                    autoClose: 2000
                })
                setTimeout(() => {
                    {
                        location.state ? navigate(location.state) : navigate('/')
                    }
                }, 3000);
            })
            .catch(error => console.log(error.message))
    }
    return (
        <div className="px-8">
            <ToastContainer />
            {/* <img src={GooglePic} className="w-4 md:w-5" alt="" /> */}
            <div className="grid grid-cols-2 gap-3 md:gap-5 mt-4 mb-8">
                <button data-aos="fade-in" data-aos-delay="200" className="flex p-2 md:p-0 gap-2 items-center btn bg-transparent border border-[#FF3C4E] text-[#FF3C4E] hover:bg-[#FF3C4E] hover:text-white" onClick={handleGoogleSignIn}>Google</button>
                <button data-aos="fade-in" data-aos-delay="200" className="flex p-2 md:p-0 gap-2 items-center btn border-black hover:border-black">Github</button>
            </div>
        </div>
    )
}

export default SocialMediaLogin