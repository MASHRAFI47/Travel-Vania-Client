import { IoDiamondOutline } from "react-icons/io5";
import { MdMovieEdit } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";


const OurServices = () => {
  return (
    <section className="container mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center" data-aos="zoom in">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="card bg-base-100" data-aos="fade-up" data-aos-delay="100">
          <figure><p className="text-4xl bg-[#F2611C] p-4 rounded-full"><IoDiamondOutline className="text-white" /></p></figure>
          <div className="card-body p-3">
            <h2 className="card-title mx-auto">Special Activities</h2>
            <p className="text-center">Personalized travel experiences for discerning travelers</p>
          </div>
        </div>

        <div className="card bg-base-100" data-aos="fade-up" data-aos-delay="300">
          <figure><p className="text-4xl bg-[#F2611C] p-4 rounded-full"><MdMovieEdit className="text-white" /></p></figure>
          <div className="card-body p-3">
            <h2 className="card-title mx-auto">Travel Arrangement</h2>
            <p className="text-center">We ensure that every aspect of your journey is planned to perfection</p>
          </div>
        </div>

        <div className="card bg-base-100" data-aos="fade-up" data-aos-delay="500">
          <figure><p className="text-4xl bg-[#F2611C] p-4 rounded-full"><FaRegStar className="text-white" /></p></figure>
          <div className="card-body p-3">
            <h2 className="card-title mx-auto">Your Private Guide</h2>
            <p className="text-center">Personalized tours led by knowledgeable local experts</p>
          </div>
        </div>

        <div className="card bg-base-100" data-aos="fade-up" data-aos-delay="700">
          <figure><p className="text-4xl bg-[#F2611C] p-4 rounded-full"><CiLocationOn className="text-white" /></p></figure>
          <div className="card-body p-3">
            <h2 className="card-title mx-auto">Location Manager</h2>
            <p className="text-center">Expert guidance and support for all your travel needs</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices