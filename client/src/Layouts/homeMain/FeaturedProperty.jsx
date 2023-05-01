// this component takes properties data from backend and display it in the home page

import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import PropertyCard from "../../components/Card/propertyCard";
import globe from "../../assets/Images/globe.png"
import { Link } from "react-router-dom";
import { SERVER_URL } from "../../Config";


function FeaturedProperty() {
    const [rentProperties, setRentProperties] = useState([]);

    const [buyProperties, setBuyProperties] = useState([]);

    const getRentProperties = async () => {
        try {
            // send user parameter to backend to exclude properties posted by current logged in user if any user is logged in
            const res = await axios.get(`${SERVER_URL}/api/properties/home/rent`);
            setRentProperties(res.data.property);
        } catch (error) {
            console.log(error);
        }
    }

    const getBuyProperties = async () => {
        try {
            const res = await axios.get(`${SERVER_URL}/api/properties/home/buy`);
            setBuyProperties(res.data.property);
        } catch (error) {
            console.log(error);
        }
    }

    const shouldFetch = useRef(true); // to prevent infinite loop
    useEffect(() => {
        if (!shouldFetch.current) {
            shouldFetch.current = false; // set it to true first time component renders
        }
        getRentProperties();
        getBuyProperties();
    }, []);




    return (
        <>
            <div className="mx-auto max-w-full px-4 lg:px-24 md:px-8 md:flex-row flex lg:flex-row flex-wrap my-0 justify-normal">
                <h2 className="text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-7xl sm:mb-5 sm:mx-6">
                    Featured Properties
                </h2>
            </div>

            <div className=" bg-slate-100 flex flex-col gap-20 py-14">
                {/* return rent */}
                <div className="mx-auto">
                    <div className="flex lg:flex-row lg:px-0 lg:justify-between flex-col mb-6 px-2">
                        <h2 className="text-5xl font-bold">Rent</h2>
                        <span className="self-start lg:self-end text-gray-400"><Link to="/rent" className="transition-all hover:underline hover:text-blue-700">Explore all Rent</Link> &rarr;</span>
                    </div>
                    <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-3 justify-start md:grid-cols-2">
                        {/* show all properties whose user_id is not equal to loggedin user  */}
                        {rentProperties ?
                            rentProperties.map((property) => (
                                <PropertyCard key={property.p_id} property={property} />
                            ))
                            :
                            (
                                <div className="text-center text-2xl font-bold text-gray-400">No properties found</div>
                            )
                        }
                    </div>
                </div>

                {/* return buy */}
                <div className="mx-auto">
                    <div className="flex lg:flex-row lg:px-0 lg:justify-between flex-col mb-6 px-2">
                        <h2 className="text-5xl font-bold">Buy</h2>
                        <span className="self-start lg:self-end text-gray-400"><Link to="/rent" className="transition-all hover:underline hover:text-blue-700">Explore all Buy</Link> &rarr;</span>
                    </div>
                    <div className="grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-3 justify-start md:grid-cols-2">
                        {buyProperties ?
                            buyProperties.map((property) => (
                                <PropertyCard key={property.p_id} property={property} />
                            ))
                            : (
                                <div className="text-center text-2xl font-bold text-gray-400">No properties found</div>
                            )
                        }
                    </div>
                </div>
            </div>

            {/* div to display some centered text */}

            <div className="flex flex-wrap justify-center text-center lg:my-16 my-8 max-w-3xl mx-auto">
                <div className="p-4">
                    <h2 className="text-6xl font-bold text-gray-900 mb-6">
                        wherever you are, you will definitely get a place
                    </h2>
                    <p className="text-gray-400 font-semibold text-lg max-w-xl mx-auto">
                        Wherever you want to live, don&apos;t hesitate to contact us. We will help you find the best place for you.
                    </p>
                </div>
            </div>
            <div className="w-full flex flex-wrap justify-center text-center lg:my-16 my-8 mx-auto">
                <img src={globe} alt="globe" className="w-1/2" />
            </div>
        </>
    );
}

export default FeaturedProperty;