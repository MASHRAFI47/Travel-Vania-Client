import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

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
            <Carousel responsive={responsive}
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
            >
                {
                    countriesCat.map(country => <Link to={`/country-spots/${country.country_Name}`} key={country._id}>
                        <div>
                            <div className="card md:mx-10 bg-base-100 shadow-xl image-full">
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
            </Carousel>
        </section>
    )
}

export default Countries