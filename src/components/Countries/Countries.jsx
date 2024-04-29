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
    let i = 100;
    const [countriesCat, setCountriesCat] = useState([])

    useEffect(() => {
        fetch("https://travel-vania-server.vercel.app/countries")
            .then(res => res.json())
            .then(data => setCountriesCat(data))
    }, []);
    return (
        <section className="container mx-auto">
            <h1 className="text-4xl font-bold text-center mb-2" data-aos="zoom-in">Countries</h1>
            <p className="mb-10 text-xl text-center" data-aos="zoom-in">Discover your next adventure with these Countries</p>
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
                        <div data-aos="zoom-in" data-aos-delay={i = i + 100}>
                            <div className="card md:mx-10 bg-base-100 shadow-xl image-full">
                                <figure><img src={country.imageURL} alt={country.country_Name} /></figure>
                                <div className="card-body">
                                    <div className="mx-auto h-full mt-10">
                                        <h2 className="card-title">{country.country_Name}</h2>
                                        <p className="mx-auto">{country.short_description}</p>
                                    </div>
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