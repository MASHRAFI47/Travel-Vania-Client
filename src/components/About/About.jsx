import Lottie from "lottie-react";
import travelAnimation from "../../../src/assets/travel.json";

const About = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="100">
          <Lottie animationData={travelAnimation} className="w-3/4" loop={true} />
        </div>
        <div data-aos="fade-right" data-aos-delay="300">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="leading-loose	mt-3">At <strong>Travel Vania</strong>, we understand that travel is not just about visiting new destinations; it`s about immersing yourself in new cultures, forging lasting memories, and discovering the extraordinary in the ordinary. With this philosophy at our core, we strive to curate authentic and enriching travel experiences that resonate with the unique interests and preferences of each of our clients.</p>
        </div>
      </div>
    </section>
  )
}

export default About