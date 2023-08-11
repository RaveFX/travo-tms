import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

export default function Rating() {
    return (
        <div className="flex flex-wrap gap-4">
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
            <CardContainer />
        </div>
    );
}

function CardContainer() {
    return (
        <Card color="transparent" shadow={false} className="w-60 max-w-[26rem]">
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
            >
                <Avatar
                    size="lg"
                    variant="circular"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="tania andrew"
                />
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Tania Andrew
                        </Typography>
                        <div className="5 flex items-center gap-0">
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
                <Typography>
                    "I found a solution to all my design needs from Creative Tim. I use
                    them as a freelancer in my hobby projects for fun! And it's really
                    affordable, very humble guys!!!"
                </Typography>
            </CardBody>
        </Card>
    );
}

function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}



// import React from 'react'

// export default function Rating() {
//     return (
//         <div>
//             <div className="w-[300px] bg-back m-3 p-5">
//                 <div className="flex my-10 ">
//                     <div className="w-1/2"><p>2023 Mar 10</p></div>
//                     <div className="w-1/2 justify-end">
//                         <Rating value={5} readonly />
//                     </div>
//                 </div>
//                 <div className="h-[300px]">
//                     <p className="mb-6 font-medium">
//                         "Excellent travel guide! Knowledgeable and friendly, they made the trip enjoyable. Only a few rushed moments,
//                         but overall, a fantastic experience. Will definitely recommend to others seeking a memorable journey."
//                     </p>
//                 </div>
//                 <div className="flex">
//                     <div className="w-1/6">
//                         <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
//                     </div>
//                     <div className="w-1/2">
//                         <p>Anne Mario</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[300px] bg-back m-3 p-5">
//                 <div className="flex my-10 ">
//                     <div className="w-1/2"><p>2023 Mar 10</p></div>
//                     <div className="w-1/2 justify-end">
//                         <Rating value={5} readonly />
//                     </div>
//                 </div>
//                 <div className="h-[300px]">
//                     <p className="mb-6 font-medium">
//                         "Highly recommend this travel guide! Their expertise and enthusiasm added so much value to the trip.
//                         A well-organized itinerary allowed us to explore unique places. Just a minor issue with transportation delays, but the overall experience was fantastic. Will consider booking with them again in the future."
//                     </p>
//                 </div>
//                 <div className="flex">
//                     <div className="w-1/6">
//                         <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
//                     </div>
//                     <div className="w-1/2">
//                         <p>Mass rimaz</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[300px] bg-back m-3 p-5">
//                 <div className="flex my-10 ">
//                     <div className="w-1/2"><p>2023 Mar 10</p></div>
//                     <div className="w-1/2 justify-end">
//                         <Rating value={4} readonly />
//                     </div>
//                 </div>
//                 <div className="h-[300px]">
//                     <p className="mb-6 font-medium">
//                         "Had an amazing time with this travel guide! Their local insights made the tour unforgettable.
//                         The guide's friendliness and attention to detail were commendable. Despite minor weather disruptions, the journey was worth every moment."
//                     </p>
//                 </div>
//                 <div className="flex">
//                     <div className="w-1/6">
//                         <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
//                     </div>
//                     <div className="w-1/2">
//                         <p>Tom Jersy</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[300px] bg-back m-3 p-5">
//                 <div className="flex my-10 ">
//                     <div className="w-1/2"><p>2023 Mar 10</p></div>
//                     <div className="w-1/2 justify-end">
//                         <Rating value={5} readonly />
//                     </div>
//                 </div>
//                 <div className="h-[300px]">
//                     <p className="mb-6 font-medium">
//                         "A delightful travel guide! Their passion for the destinations shone through. Loved the carefully curated itinerary and engaging storytelling.
//                         Minor communication glitch, but the overall trip was fantastic. Highly recommended for an enriching adventure."
//                     </p>
//                 </div>
//                 <div className="flex">
//                     <div className="w-1/6">
//                         <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
//                     </div>
//                     <div className="w-1/2">
//                         <p>Robert singh</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[300px] bg-back m-3 p-5">
//                 <div className="flex my-10 ">
//                     <div className="w-1/2"><p>2023 Mar 10</p></div>
//                     <div className="w-1/2 justify-end">
//                         <Rating value={3} readonly />
//                     </div>
//                 </div>
//                 <div className="h-[300px]">
//                     <p className="mb-6 font-medium">
//                         "Booked a tour with this travel guide, and it was incredible! Their knowledge and professionalism made the experience exceptional. The group dynamics were fantastic, but wish there were more photo stops. Still,
//                         a memorable journey that exceeded expectations."
//                     </p>
//                 </div>
//                 <div className="flex">
//                     <div className="w-1/6">
//                         <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
//                     </div>
//                     <div className="w-1/2">
//                         <p>Leo fernando</p>
//                     </div>
//                 </div>
//             </div>
//             <div className="w-[300px] bg-back m-3 p-5">
//                 <div className="flex my-10 ">
//                     <div className="w-1/2"><p>2023 Mar 10</p></div>
//                     <div className="w-1/2 justify-end">
//                         <Rating value={4} readonly />
//                     </div>
//                 </div>
//                 <div className="h-[300px]">
//                     <p className="mb-6 font-medium">
//                         "Excellent travel guide! Knowledgeable and friendly, they made the trip enjoyable. Only a few rushed moments,
//                         but overall, a fantastic experience. Will definitely recommend to others seeking a memorable journey."
//                     </p>
//                 </div>
//                 <div className="flex ">
//                     <div className="w-1/6">
//                         <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
//                     </div>
//                     <div className="w-1/2">
//                         <p>George silva</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }
