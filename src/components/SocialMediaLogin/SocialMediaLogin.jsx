import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"
import { ToastContainer, toast } from "react-toastify"
import { useLocation, useNavigate } from "react-router-dom"

import googleLogo from '../../../src/assets/images/googleLogo.png'
import { FaGithub } from "react-icons/fa6";



const SocialMediaLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext)
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


    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user)
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
            <div className="grid grid-cols-2 gap-3 md:gap-5 mb-8">
                <button data-aos="fade-in" data-aos-delay="200" className="flex p-2 md:p-0 gap-2 items-center btn bg-transparent border border-[#FF3C4E] text-[#FF3C4E] hover:bg-[#FF3C4E] hover:text-white" onClick={handleGoogleSignIn}> <img src={googleLogo} className="w-5" alt="" /> Google</button>
                <button data-aos="fade-in" data-aos-delay="200" className="flex p-2 md:p-0 gap-2 items-center btn border-black hover:border-black" onClick={handleGithubSignIn}> <p className="text-lg"><FaGithub  /></p> Github</button>
            </div>
        </div>
    )
}

export default SocialMediaLogin