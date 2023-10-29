import { Typography, Avatar, Rating } from "@material-tailwind/react";
// import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';
import Vehicle_Owner_Sidebar from './vo_sidebar1';

import TopNavbar from '../../components/Vehicle_owner/topNavbar';

export function rating() {

    return (
        <div className='flex '>
            <div><Vehicle_Owner_Sidebar /></div>

            <div className='h-screen flex  flex-grow flex-col'>
                <div><TopNavbar /></div>
                <div className='overflow-y-auto flex sm:flex-row flex-wrap  w-full h-full overflow-auto my-5 xs:justify-center'>
                    <div className="w-[300px] bg-back m-3 p-5">
                        <div className="flex my-10 ">
                            <div className="w-1/2"><p>2023 Mar 10</p></div>
                            <div className="w-1/2 justify-end">
                                <Rating value={5} readonly />
                            </div>
                        </div>
                        <div className="h-[300px]">
                            <p className="mb-6 font-medium">
                                "Excellent travel guide! Knowledgeable and friendly, they made the trip enjoyable. Only a few rushed moments,
                                but overall, a fantastic experience. Will definitely recommend to others seeking a memorable journey."
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-1/6">
                                <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                            </div>
                            <div className="w-1/2">
                                <p>Anne Mario</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] bg-back m-3 p-5">
                        <div className="flex my-10 ">
                            <div className="w-1/2"><p>2023 Mar 10</p></div>
                            <div className="w-1/2 justify-end">
                                <Rating value={5} readonly />
                            </div>
                        </div>
                        <div className="h-[300px]">
                            <p className="mb-6 font-medium">
                                "Highly recommend this travel guide! Their expertise and enthusiasm added so much value to the trip.
                                A well-organized itinerary allowed us to explore unique places. Just a minor issue with transportation delays, but the overall experience was fantastic. Will consider booking with them again in the future."
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-1/6">
                                <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                            </div>
                            <div className="w-1/2">
                                <p>Mass rimaz</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] bg-back m-3 p-5">
                        <div className="flex my-10 ">
                            <div className="w-1/2"><p>2023 Mar 10</p></div>
                            <div className="w-1/2 justify-end">
                                <Rating value={4} readonly />
                            </div>
                        </div>
                        <div className="h-[300px]">
                            <p className="mb-6 font-medium">
                                "Had an amazing time with this travel guide! Their local insights made the tour unforgettable.
                                The guide's friendliness and attention to detail were commendable. Despite minor weather disruptions, the journey was worth every moment."
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-1/6">
                                <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                            </div>
                            <div className="w-1/2">
                                <p>Tom Jersy</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] bg-back m-3 p-5">
                        <div className="flex my-10 ">
                            <div className="w-1/2"><p>2023 Mar 10</p></div>
                            <div className="w-1/2 justify-end">
                                <Rating value={5} readonly />
                            </div>
                        </div>
                        <div className="h-[300px]">
                            <p className="mb-6 font-medium">
                                "A delightful travel guide! Their passion for the destinations shone through. Loved the carefully curated itinerary and engaging storytelling.
                                Minor communication glitch, but the overall trip was fantastic. Highly recommended for an enriching adventure."
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-1/6">
                                <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                            </div>
                            <div className="w-1/2">
                                <p>Robert singh</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] bg-back m-3 p-5">
                        <div className="flex my-10 ">
                            <div className="w-1/2"><p>2023 Mar 10</p></div>
                            <div className="w-1/2 justify-end">
                                <Rating value={3} readonly />
                            </div>
                        </div>
                        <div className="h-[300px]">
                            <p className="mb-6 font-medium">
                                "Booked a tour with this travel guide, and it was incredible! Their knowledge and professionalism made the experience exceptional. The group dynamics were fantastic, but wish there were more photo stops. Still,
                                a memorable journey that exceeded expectations."
                            </p>
                        </div>
                        <div className="flex">
                            <div className="w-1/6">
                                <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                            </div>
                            <div className="w-1/2">
                                <p>Leo fernando</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[300px] bg-back m-3 p-5">
                        <div className="flex my-10 ">
                            <div className="w-1/2"><p>2023 Mar 10</p></div>
                            <div className="w-1/2 justify-end">
                                <Rating value={4} readonly />
                            </div>
                        </div>
                        <div className="h-[300px]">
                            <p className="mb-6 font-medium">
                                "Excellent travel guide! Knowledgeable and friendly, they made the trip enjoyable. Only a few rushed moments,
                                but overall, a fantastic experience. Will definitely recommend to others seeking a memorable journey."
                            </p>
                        </div>
                        <div className="flex ">
                            <div className="w-1/6">
                                <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                            </div>
                            <div className="w-1/2">
                                <p>George silva</p>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
}

export default rating;