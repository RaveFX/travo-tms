import {
    Carousel, IconButton, Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Button
} from '@material-tailwind/react'
import React from 'react'
// import Vehicle_Owner_Sidebar from './vehicle_owner_sidebar';
import Vehicle_Owner_Sidebar from './vo_sidebar1';
import TopNavbar from '../../components/Vehicle_owner/topNavbar';
// import { Link } from 'react-router-dom';
// import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const requestMore = () => {
    const slides = [
        "../public/Vehicle_owner/16.png",
        "../public/Vehicle_owner/16.png",
        "../public/Vehicle_owner/16.png",


    ]
    const data = [
        {
            label: "Without Driver(1 Day)",
            value: "html",
            desc1: '1-6 days - Rs.1645/-',
            desc2: '7-20 days - Rs.1435/-',
            desc3: '20-29 days - Rs.1122/-',
            desc4: '30 days - Rs.845/-',
            info: ''
        },
        {
            label: "With Driver",
            value: "react",
            desc1: `1 day with driver - Rs.2394/-`,
            desc2: 'w/driver per hr - Rs.476'
        },

    ]
    return (
        <div className='flex'>
            <div className=''><Vehicle_Owner_Sidebar /></div>
            <div className='h-screen flex flex-grow flex-col'>
                <div><TopNavbar /></div>
                <div className='overflow-y-auto'>
                    <div><p className='text-3xl m-5'>Toyota Prius</p></div>
                    <div className='flex m-5 sm:flex-row flex-col '>
                        <div className='overflow-hidden relative sm:w-1/2 w-full justify-center'>
                            <div className='flex'>
                                <Carousel
                                    transition={{ duration: 2 }}
                                    className='rounded-xl bg-gray-200 items-center '
                                >{slides.map((s) => (
                                    <img className='h-fiull w-full object-cover' src={s} />
                                ))}</Carousel>
                            </div>
                            <div className='m-5'>
                                <p className='text-2xl underline'>Vehicle Infomation</p>
                                <div className='flex my-2'>
                                    <div>
                                        <p className='text-black'>Modal : </p>
                                    </div>
                                    <div>
                                        <p className='text-gray-400 mx-3' >Car</p>
                                    </div>
                                </div>
                                <div className='flex my-2'>
                                    <div>
                                        <p className='text-black'>Color : </p>
                                    </div>
                                    <div>
                                        <p className='text-gray-400 mx-3' >White</p>
                                    </div>
                                </div>
                                <div className='flex my-2'>
                                    <div>
                                        <p className='text-black'>Type : </p>
                                    </div>
                                    <div>
                                        <p className='text-gray-400 mx-3' >Automatic</p>
                                    </div>
                                </div>
                                <div className='flex my-2'>
                                    <div>
                                        <p className='text-black'>No of Pasengers : </p>
                                    </div>
                                    <div>
                                        <p className='text-gray-400 mx-3' >4</p>
                                    </div>
                                </div>
                                <div className='flex my-2'>
                                    <div>
                                        <p className='text-black'>Milage : </p>
                                    </div>
                                    <div>
                                        <p className='text-gray-400 mx-3' >Unlimited</p>
                                    </div>
                                </div>
                                <div className='flex my-2'>
                                    <div>
                                        <p className='text-black'>Space : </p>
                                    </div>
                                    <div>
                                        <p className='text-gray-400 mx-3' >1 large bag, 2 small Bag</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='sm:w-1/2 justify-center '>
                            <div className='bg-back mx-[5vh] p-5 sm:h-3/4 h-full'>
                                <p className='py-8 text-center text-2xl'>Rental</p>
                                <Tabs id="custom-animation" value="html">
                                    <TabsHeader className="bg-transparent"
                                        indicatorProps={{
                                            className: "bg-blue-500/10 shadow-none text-blue-500",
                                        }}>
                                        {data.map(({ label, value }) => (
                                            <Tab key={value} value={value}>
                                                {label}
                                            </Tab>
                                        ))}
                                    </TabsHeader>
                                    <TabsBody
                                        animate={{
                                            initial: { y: 150 },
                                            mount: { y: 0 },
                                            unmount: { y: 150 },
                                        }}
                                    >
                                        {data.map(({ value, desc1, desc2, desc3, desc4 }) => (
                                            <TabPanel key={value} value={value}>

                                                <div>
                                                    {desc1}</div>
                                                <div>
                                                    {desc2}</div>
                                                <div>
                                                    {desc3}</div>
                                                <div className=''>
                                                    {desc4}</div>
                                            </TabPanel>
                                        ))}
                                    </TabsBody>
                                </Tabs>
                            </div>
                            <div className='m-9'>

                                <Button variant="gradient" className="rounded-full bg-green" color="green">send to Admin</Button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default requestMore