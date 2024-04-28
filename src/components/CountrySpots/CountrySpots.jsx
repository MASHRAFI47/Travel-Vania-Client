import { Link, useLoaderData, useParams } from "react-router-dom";

const CountrySpots = () => {
    const countryParam = useParams();
    const touristSpots = useLoaderData();

    const filteredCountry = touristSpots.filter(tour => tour.country_Name == countryParam.countryName)



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto">
            {
                filteredCountry.map(country => <div key={country._id}>
                    <div>
                        <div className="card border my-10 bg-base-100 shadow-xl">
                            <figure><img src={country.imageURL} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl"><span className="text-xl font-bold">Tourist Spot:</span> {country.tourists_spot_name}</h2>
                                <h2 className="text-xl"><span className="text-xl font-bold">Country Name:</span> {country.country_Name}</h2>
                                <h2 className="text-xl"><span className="text-xl font-bold">Location:</span> {country.location}</h2>
                                <h2 className="text-xl"><span className="text-xl font-bold">Average Cost:</span> {country.average_cost} $</h2>
                                <h2 className="text-xl"><span className="text-xl font-bold">Seasonality:</span> {country.seasonality}</h2>
                                <p className="text-xl mt-2"><span className="font-bold">Description:</span>{country.short_description}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/tourist-spot-details/${country._id}`}>
                                        <button className="btn btn-success text-white border-none bg-[#F2611C]">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        </div>
    )
}

export default CountrySpots