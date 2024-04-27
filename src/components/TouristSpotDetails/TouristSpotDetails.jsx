import { useLoaderData, useParams } from "react-router-dom"

const TouristSpotDetails = () => {
    const { id } = useParams();
    const allSpots = useLoaderData();
    const singleSpot = allSpots.find(spot => spot._id == id);
    return (
        <div className="mx-5 md:mx-auto">
            <div className="container mx-auto mb-10">
                <div className="">
                    <div className="space-y-2 my-5">
                        <h1 className="text-3xl"><span className="font-bold">Tourist Spot:</span> {singleSpot?.tourists_spot_name}</h1>
                        <h1 className="text-2xl"><span className="font-semibold">Location:</span> {singleSpot?.location}</h1>
                        <h3 className="text-2xl font-semibold text-red-600"><span>Price:</span> {singleSpot?.average_cost}$</h3>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 mb-4">
                    <div className="col-span-3">
                        <img src={singleSpot?.imageURL} className="rounded-lg w-full" alt="" />
                    </div>
                    <div className="ml-0 md:ml-5 space-y-2">
                        <h3 className="text-2xl"><span className="font-semibold">Country:</span> {singleSpot?.country_Name}</h3>
                        <h3 className="text-2xl"><span className="font-semibold">Seasonality:</span> {singleSpot?.seasonality}</h3>
                        <h3 className="text-2xl"><span className="font-semibold">Total visitor per year:</span> {singleSpot?.totalVisitorsPerYear}</h3>
                        <h3 className="text-2xl"><span className="font-semibold">Travel Time:</span> {singleSpot?.travel_time}</h3>
                    </div>
                </div>

                <div>
                    <p className="text-xl"> <span className="font-semibold">Description:</span> {singleSpot?.short_description}</p>
                </div>
            </div>
        </div>
    )
}

export default TouristSpotDetails