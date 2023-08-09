import React from 'react'
import Sidebar from '../../components/sidebar';
import TopNavbar from '../../components/topNavbar';



const invitation = () => {
    const people = [
        {
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            msg: 'Hey , I need more information.........',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Michael Foster',
            email: 'michael.foster@example.com',
            msg: 'can you please.........',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Dries Vincent',
            email: 'dries.vincent@example.com',
            msg: 'when will you arrive to.........',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Lindsay Walton',
            email: 'lindsay.walton@example.com',
            msg: 'Hey ,can u please.........',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Courtney Henry',
            email: 'courtney.henry@example.com',
            msg: 'It was an amazing.........',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        },
        {
            name: 'Tom Cook',
            email: 'tom.cook@example.com',
            msg: 'Hey , I need more information.........',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ]
    const tours = [
        {
            name: 'Kandy',
            description: "Discover Kandy's rich history, sacred Temple of the Tooth, scenic hills, lush gardens, cultural shows, and serene lakes. Join us!",
            img: "https://cdn.getyourguide.com/img/location/5c83eaac2b43a.jpeg/88.jpg"
        },
        {
            name: 'Jaffna',
            description: "Embark on a captivating Jaffna tour, exploring ancient temples, unique Tamil culture, pristine islands, and delectable cuisine. Don't miss out!",
            img: "https://tse4.mm.bing.net/th?id=OIP.3D9r3haE82xdMdWUYOQMhQHaFS&pid=Api&P=0&w=300&h=300"

        },
        {
            name: 'Galle',
            description: "Experience Galle's colonial charm, ancient fort, stunning beaches, vibrant markets, and local art scene. Unforgettable adventure awaits!",
            img: "https://tse4.mm.bing.net/th?id=OIP.gfLSC5wo79vT59V1QEN37AHaE7&pid=Api&P=0&h=220"

        },
        {
            name: 'Matara',
            description: "Embrace the beauty of Matara with its golden beaches, historic temples, and laid-back coastal vibes etc. Unforgettable experiences await!",
            img: "https://tse3.mm.bing.net/th?id=OIP.LjSxSSdI4shNTdo07pG1TQHaE8&pid=Api&P=0&h=220"

        },
        {
            name: 'Trinco',
            description: "Indulge in the wonders of Trincomalee - pristine beaches, azure waters, vibrant coral reefs and the renowned Koneswaram Temple etc. Join us now!",
            img: "https://tse1.mm.bing.net/th?id=OIP.vG7czIfZzH6SgyvFxrq_0gHaE8&pid=Api&P=0&h=220"

        },


    ]



    return (
        <div className='flex'>
            <div><Sidebar /></div>
            <div className='flex flex-grow flex-col'>
                <div><TopNavbar /></div>
                
                    <div className='flex sm:flex-row flex-col'>

                        <div className='flex flex-wrap mx-auto '>
                            <div class="mt-4 flex gap-2 ml-1/2">
                                <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Create new Tour</button>

                            </div>
                            <ul role="" className='flex flex-wrap mx-auto '>
                                {tours.map((tour) => (
                                    <li key={tour.name} className=''>
                                        <div class="m-4 p-2  sm:max-w-xs w-3/4 overflow-hidden rounded-lg bg-white shadow">
                                            <img src={tour.img} class="aspect-video w-full object-cover" alt="" />
                                            <div class="p-4">
                                                <h3 class="text-xl font-medium text-gray-900">{tour.name}</h3>
                                                <p class="mt-1 text-gray-500">{tour.description}</p>
                                                <div class="mt-4 flex gap-2">
                                                    <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send</button>

                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}

                    
                            </ul>





                        </div>
                        <div>
                            <div class='m-[5vh] '>
                                <div className=' text-2xl mb-5   text-dimBlack'>
                                    <p>Invitation Sent to</p>
                                </div>

                                {/* Conversation Component Code */}
                                <ul role="list" className="divide-y divide-gray-100">
                                    {people.map((person) => (
                                        <li key={person.email} className="flex justify-between gap-x-4 py-2">
                                            <div className="flex gap-x-4">
                                                <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                                <div className="min-w-0 flex-auto">
                                                    <p className="text-sm font-semibold leading-4 text-gray-900">{person.name}</p>
                                                    <p className="mt-1 truncate text-xs leading-4 text-gray-500">{person.email}</p>
                                                    <p className="mt-1 truncate leading-5 text-gray">{person.msg}</p>
                                                </div>
                                            </div>
                                            <div className="hidden sm:flex sm:flex-col sm:items-end">


                                                <div className="mt-1 flex items-center gap-x-1.5">

                                                    <p className="text-xs leading-4 text-green">Reply</p>
                                                </div>

                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>

    )
}

export default invitation