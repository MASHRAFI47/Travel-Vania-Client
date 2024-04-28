import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Countries = () => {
    const [countriesCat, setCountriesCat] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/countries")
            .then(res => res.json())
            .then(data => setCountriesCat(data))
    }, []);
    return (
        <section className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-10">Countries</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    countriesCat.map(country => <Link to={`/country-spots/${country.country_Name}`} key={country._id}>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl image-full">
                                <figure><img src={country.imageURL} alt={country.country_Name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title mx-auto h-full">{country.country_Name}</h2>
                                    <p>{country.shortDescription}</p>
                                    <div className="card-actions justify-end">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                    )
                }
            </div>
        </section>
    )
}

export default Countries