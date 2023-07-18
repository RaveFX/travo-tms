import { useState } from 'react'
import { complete, kandy, people01, client, bookmark } from '../assets'

const dashboardTG = () => {
    const dashs = [
        { title: "Client", src: client },
        { title: "Complete", src: complete },
        { title: "Invitations", src: bookmark },

    ]
    const people = [
        {
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            role: 'Co-Founder / CEO',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Michael Foster',
            email: 'michael.foster@example.com',
            role: 'Co-Founder / CTO',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Dries Vincent',
            email: 'dries.vincent@example.com',
            role: 'Business Relations',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: null,
        },
        {
            name: 'Lindsay Walton',
            email: 'lindsay.walton@example.com',
            role: 'Front-end Developer',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Courtney Henry',
            email: 'courtney.henry@example.com',
            role: 'Designer',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: '3h ago',
            lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
            name: 'Tom Cook',
            email: 'tom.cook@example.com',
            role: 'Director of Product',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            lastSeen: null,
        },
    ]
    return (
        <div className=' m-[40px] '>
            <div className='flex flex-row sm:flex-wrap  '>
                <img src={people01} alt="people01" className='w-[60px] h-[60px]' />
                <div className='flex-col mx-2   mr-[10vh]'>
                    <p className='text-3xl'>Hi, Stela!</p>
                    <p className=''>Travel Guide</p>
                </div>
                <div className="card bg-base-100 shadow-xl  w-32 h-32 bg-green ml-5 rounded-lg my-2 ">
                    <figure><img src={client} alt="Shoes" className='  mx-[5.5vh] mt-3 ' /></figure>
                    <div className="card-body mt-4 mx-9">
                        <p>Clients</p>
                        <p>128</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl  w-32 h-32 bg-green ml-5 rounded-lg my-2 ">
                    <figure><img src={complete} alt="Shoes" className='  mx-[5.5vh] mt-3' /></figure>
                    <div className="card-body mt-4 mx-9">
                        <p>Clients</p>
                        <p>128</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl  w-32 h-32 bg-green ml-5 rounded-lg my-2 ">
                    <figure><img src={bookmark} alt="Shoes" className='  mx-[5.5vh] mt-3' /></figure>
                    <div className="card-body mt-4 mx-9">
                        <p>Clients</p>
                        <p>128</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl  w-32 h-32 bg-green ml-5 rounded-lg my-2 ">
                    <figure><img src={complete} alt="Shoes" className='  mx-[5.5vh] mt-3' /></figure>
                    <div className="card-body mt-4 mx-9">
                        <p>Clients</p>
                        <p>128</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl  w-32 h-32 bg-green ml-5 rounded-lg my-2 ">
                    <figure><img src={complete} alt="Shoes" className='  mx-[5.5vh] mt-3' /></figure>
                    <div className="card-body mt-4 mx-9">
                        <p>Clients</p>
                        <p>128</p>
                    </div>
                </div>


                {/* <ul className='  '>
                    <div className={`flex flex-row bg-white  shadow-2xl absolute mx-4  min-h-[140px] rounded-xl dashboardTG`}>
                        {dashs.map((dash, index) => (
                            <li
                                key={index}
                                className={`bg-dimBlack flex flex-col ml-[50px] items-center mt-2 h-[45px]
                                cursor-pointer  hover:bg-green rounded-md ${index === 0 && "bg-green"} `}>
                                <img src={`${dash.src} `} />
                                <span className={`text-dimBlack mt-6`}> {dash.title}</span>
                            </li>
                        ))}

                    </div>
                </ul> */}

            </div>
            <div className=' flex-col text-4xl  w-1/6 mb-5 text-dimBlack'>
                <p>My Tours</p>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-wrap  w-1/2'>

                    <div className="card card-compact rounded-xl bg-lightBlue w-60 h-72 mr-5 relative shadow-xl">
                        <figure><img src={kandy} alt="kandy" className='rounded-xl w-56 h-36 m-2 cursor-pointer' /></figure>
                        <div className="card-body m-6 ">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card card-compact rounded-xl bg-lightBlue w-60 h-72 mr-5 relative shadow-xl">
                        <figure><img src={kandy} alt="kandy" className='rounded-xl w-56 h-36 m-2 cursor-pointer' /></figure>
                        <div className="card-body m-6 ">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact rounded-xl bg-lightBlue w-60 h-72 mr-5 relative shadow-xl">
                        <figure><img src={kandy} alt="kandy" className='rounded-xl w-56 h-36 m-2 cursor-pointer' /></figure>
                        <div className="card-body m-6 ">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact rounded-xl bg-lightBlue w-60 h-72 mr-5 relative shadow-xl">
                        <figure><img src={kandy} alt="kandy" className='rounded-xl w-56 h-36 m-2 cursor-pointer' /></figure>
                        <div className="card-body m-6 ">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='ml-[15vh] w-1/3 h-1/6'>
                    <div className=' flex-col text-4xl  w-1/6 mb-5 text-dimBlack'>
                        <p>Conversation</p>
                    </div>

                    <ul role="list" className="divide-y divide-gray-100">
                        {people.map((person) => (
                            <li key={person.email} className="flex justify-between gap-x-6 py-5">
                                <div className="flex gap-x-4">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
                                    </div>
                                </div>
                                <div className="hidden sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                                    {person.lastSeen ? (
                                        <p className="mt-1 text-xs leading-5 text-gray-500">
                                            Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                                        </p>
                                    ) : (
                                        <div className="mt-1 flex items-center gap-x-1.5">
                                            <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                                                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                            </div>
                                            <p className="text-xs leading-5 text-gray-500">Online</p>
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default dashboardTG