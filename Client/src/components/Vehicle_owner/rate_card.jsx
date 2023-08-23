import React from 'react'
// import { complete, menu, close, kandy, people01, customer, bookmark, invitation, request, star } from '../assets/';
import { Rating, Button } from "@material-tailwind/react";


const RateCard = ({ image, name, rate }) => {
    return (
        <div className="card rounded-xl flex flex-row bg-white sm:w-1/2  mr-5 my-2 relative shadow-xl">
            <figure className='flex sm:flex-row'><img src={image} alt="kandy" className='w-36 mr-2 rounded-lg' />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-sm text-dimBlack'>{rate}</p>
                    <Button variant="text" className="flex-col items-center gap-2 text-black text-xs">
                         More
                    </Button>
                </div>
            </figure>
        </div>
    )
}

export default RateCard