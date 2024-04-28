import { useLoaderData } from "react-router-dom"
import About from "../../components/About/About"
import Banner from "../../components/Banner/Banner"
import TouristSpots from "../../components/TouristSpots/TouristSpots"
import Countries from "../../components/Countries/Countries"

const Home = () => {
  const touristSpots = useLoaderData()

  return (
    <div>
      <Banner />
      <div className="mx-5 md:mx-auto">
        <About />
        <TouristSpots touristSpots={touristSpots} />
        <Countries />
      </div>
    </div>
  )
}

export default Home