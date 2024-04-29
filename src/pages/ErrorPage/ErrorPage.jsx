import Lottie from "lottie-react";
import error from '../../../src/assets/404error.json'


const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <Lottie animationData={error} className="w-3/4" loop={true} />
    </div>
  )
}

export default ErrorPage