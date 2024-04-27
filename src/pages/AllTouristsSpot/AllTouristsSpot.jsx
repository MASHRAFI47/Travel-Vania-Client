import { Link, useLoaderData } from "react-router-dom"

const AllTouristsSpot = () => {
  const allTourists = useLoaderData();
  return (
    <div className="container mx-auto">
      {
        allTourists.map(tourist => <div key={tourist._id} className="mt-10 mb-10 mx-5 md:mx-auto">
          <div className="card md:card-side bg-base-100 shadow-xl border">
            <img src={tourist?.imageURL} className="w-full md:w-[35%] lg:h-[25%] rounded-xl" alt="Movie" />
            <div className="card-body">
              <h2 className="card-title text-xl">Tourist Spot: {tourist.tourists_spot_name}</h2>
              <h2 className="font-semibold text-xl text-red-600">Price: {tourist.average_cost}$</h2>
              <h3 className="font-bold text-xl">Travel Time: {tourist.travel_time}</h3>
              <h3 className="font-bold text-xl">Seasonality: {tourist.seasonality}</h3>
              <div className="card-actions justify-end">
                <Link to={`/tourist-spot-details/${tourist._id}`}>
                  <button className="btn btn-primary">View Details</button>
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