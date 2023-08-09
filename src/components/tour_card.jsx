import React from 'react'
import { Link } from 'react-router-dom';
import { Rating, Button } from "@material-tailwind/react";



const TourCard = ({ image, name, des }) => {
    return (
        <div className="card card-compact rounded-xl bg-white sm:w-44 w-52 h-52 sm:mr-4 my-2 relative shadow-xl hover:bg-slate-100 cursor-pointer" >
            <figure>
            <Link to="/travel_guide_mytours_more">
                <img src={image} alt="kandy" className=' rounded-xl sm:w-40 w-48 h-24 m-2 cursor-pointer' />
                </Link>
            </figure>
            <div className="card-body mx-5">
                {/* <p><Link to="/travel_guide_mytours_more">ggg</Link></p> */}
                <p className='text-dimBlack text-sm'>{des}</p>
                <h2 className="card-title text-xs">{name}</h2>
                <div className="">
                    <Rating ratedColor="yellow" value={3} readonly />
                </div>
            </div>
        </div>
    );
};

export default TourCard