import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TouristSpots = ({ touristSpots }) => {
    const [showData, setShowData] = useState(6)

    const handleShowAll = () => {
        setShowData(touristSpots.length)
    }

    const handleShowLess = () => {
        setShowData(6)
    }

    console.log(touristSpots)
    return (
        <section className='container mx-auto '>
            <h1 className='text-3xl font-bold mb-10 text-center'>Tourist Spots</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {touristSpots.slice(0, showData).map(spot => <div key={spot._id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={spot?.imageURL} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {spot.tourists_spot_name}
                                <div className="badge badge-error text-lg text-white">{spot.average_cost} $</div>
                            </h2>
                            <p>{spot.short_description}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{spot.seasonality}</div>
                                <div className="badge badge-outline">{spot.travel_time}</div>
                                <Link to={`/tourist-spot-details/${spot._id}`}>
                                    <button className="btn mt-5 btn-success text-white border-none bg-[#F2611C]">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
            <div className='text-center'>
                {showData == 6 ?
                    <button className='btn mt-5 btn-success text-white border-none bg-[#F2611C]' onClick={handleShowAll}>Show All</button>
                    :
                    <button className='btn mt-5 btn-success text-white border-none bg-[#F2611C]' onClick={handleShowLess}>Show Less</button>
                }
            </div>
        </section>
    )
}

TouristSpots.propTypes = {
    touristSpots: PropTypes.array
}

export default TouristSpots