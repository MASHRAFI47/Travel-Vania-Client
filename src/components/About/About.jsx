import Lottie from "lottie-react";
import travelAnimation from "../../../src/assets/travel.json";

const About = () => {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-2 items-center">
        <div>
          <Lottie animationData={travelAnimation} className="w-3/4" loop={true} />
        </div>
        <div>
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="leading-loose	mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque architecto debitis suscipit quae excepturi inventore nulla, fugiat dolore repudiandae corporis, consequatur harum reprehenderit minus molestiae beatae voluptate doloribus earum sed! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos cupiditate itaque iure tenetur exercitationem ullam quaerat assumenda blanditiis, reiciendis qui praesentium numquam sapiente nemo aut quia ut deserunt corrupti vero!</p>
        </div>
      </div>
    </section>
  )
}

export default About