import { useLoaderData, useParams } from "react-router-dom"

const TouristSpotDetails = () => {
    const { id } = useParams();
    const allSpots = useLoaderData();
    const singleSpot = allSpots.find(spot => spot._id == id);
    console.log(singleSpot)
    return (
        <div className="container mx-auto">
            <div className="">
                <div className="space-y-2 my-5">
                    <h1 className="text-3xl font-bold">Tourist Spot: {singleSpot?.tourists_spot_name}</h1>
                    <h1 className="text-2xl font-semibold">Location: {singleSpot?.location}</h1>
                    <h3 className="text-2xl font-semibold text-red-600">Price: {singleSpot?.average_cost}$</h3>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 mb-10">
                <div className="col-span-3">
                    <img src={singleSpot?.imageURL} className="rounded-lg w-full" alt="" />
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default TouristSpotDetails