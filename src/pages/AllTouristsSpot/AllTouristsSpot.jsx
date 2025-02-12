import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom"

const AllTouristsSpot = () => {
  const allTourists = useLoaderData();
  const [sortTour, setSortTour] = useState(allTourists)

  const handleAscending = () => {
    const sortingTour = [...allTourists].sort((a, b) => parseInt(a.average_cost) > parseInt(b.average_cost) ? 1 : -1);
    setSortTour(sortingTour)
    console.log(sortingTour)
  }

  const handleDescending = () => {
    const sortingTour = [...allTourists].sort((a, b) => parseInt(a.average_cost) > parseInt(b.average_cost) ? -1 : 1);
    setSortTour(sortingTour)
  }

  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Travel Vania | All Tourists Spots</title>
      </Helmet>
      <div className="flex justify-center md:justify-end mt-3">
        <details className="dropdown">
          <summary className="m-1 btn bg-green-500 hover:bg-green-600 text-white" data-aos="fade-in">Sort with price</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="font-semibold" onClick={handleAscending}><a>Low &gt; High</a></li>
            <li className="font-semibold" onClick={handleDescending}><a>High &gt; Low</a></li>
          </ul>
        </details>
      </div>
      {
        // .sort((a,b) => a.average_cost > b.average_cost ? 1 : -1)
        sortTour.map(tourist => <div key={tourist._id} className="mt-5 md:mt-10 mb-10 mx-5 md:mx-auto">
          <div className="card md:card-side bg-base-100 shadow-xl border" data-aos="zoom-in">
            <img src={tourist?.imageURL} className="w-full md:w-[35%] lg:h-[25%] rounded-xl" alt="Movie" />
            <div className="card-body">
              <h2 className="card-title text-xl">Tourist Spot: {tourist.tourists_spot_name}</h2>
              <h2 className="font-semibold text-xl text-red-600">Average Cost: {tourist.average_cost}$</h2>
              <h3 className="font-bold text-xl">Travel Time: {tourist.travel_time}</h3>
              <h3 className="font-bold text-xl">Seasonality: {tourist.seasonality}</h3>
              <div className="card-actions justify-end">
                <Link to={`/tourist-spot-details/${tourist._id}`}>
                  <button className="btn btn-primary border-none text-white bg-[#F2611C]">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  )
}

export default AllTouristsSpot