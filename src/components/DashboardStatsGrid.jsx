import React from 'react';
import {
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    MapIcon,
} from "@heroicons/react/24/outline";


export default function DashboardStatsGrid() {
    return (
        <div className=' mt-4 grid grid-cols-4 gap-4 w-full'>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                    <ListItemPrefix>
                        <MapIcon className="h-5 w-5 2-xl text-white" />
                    </ListItemPrefix>
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sale</span>
                    <div className='flex-items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$356</strong>
                        <span className='text-sm text-green-500 pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                    <ListItemPrefix>
                        <MapIcon className="h-5 w-5 2-xl text-white" />
                    </ListItemPrefix>
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sale</span>
                    <div className='flex-items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$356</strong>
                        <span className='text-sm text-green-500 pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                    <ListItemPrefix>
                        <MapIcon className="h-5 w-5 2-xl text-white" />
                    </ListItemPrefix>
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sale</span>
                    <div className='flex-items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$356</strong>
                        <span className='text-sm text-green-500 pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-sky-500'>
                    <ListItemPrefix>
                        <MapIcon className="h-5 w-5 2-xl text-white" />
                    </ListItemPrefix>
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Total Sale</span>
                    <div className='flex-items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$356</strong>
                        <span className='text-sm text-green-500 pl-2'>+234</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
}

function BoxWrapper({ children }) {
    return (
        <div className='bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center'>
            {children}
        </div>
    );
}


// Top Section Component
const TopSection = () => {
    return (
        <div className=' flex flex-row '>
            <img src={people01} alt="people01" className='justify-start w-[60px] h-[60px]' />
            <div className=' mx-2 mr-[8vh]'>
                <p className='text-3xl '>Hi,Stela!</p>
                <p className=''>Travel Guide</p>
            </div>
        </div>
    );
};


