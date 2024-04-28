import { useLoaderData } from "react-router-dom"
import About from "../../components/About/About"
import Banner from "../../components/Banner/Banner"
import TouristSpots from "../../components/TouristSpots/TouristSpots"
import Countries from "../../components/Countries/Countries"
import OurServices from "../../components/OurServices/OurServices"
import ExtraInfo from "../../components/ExtraInfo/ExtraInfo"
import { Helmet } from "react-helmet-async"

const Home = () => {
  const touristSpots = useLoaderData()

  return (
    <div>
      <Helmet>
        <title>Travel Vania | Home</title>
      </Helmet>
      <Banner />
      <div className="mx-5 md:mx-auto">
        <About />
        <OurServices />
        <TouristSpots touristSpots={touristSpots} />
        <Countries />
      </div>
      <ExtraInfo />
    </div>
  )
}

export default Home