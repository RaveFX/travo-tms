import React from 'react';
import { Link } from 'react-router-dom';
import people01 from '../assets/people01.png'; // Use default import for the image
import DashboardStatsGrid from './DashboardStatsGrid';
import TransactionChart from './TransactionChart';

export default function Dashboard() {
    return (
        <div className='flex flex-col gap-4'>
            <div className=' flex flex-row '>
                <img src={people01} alt="people01" className='justify-start w-[60px] h-[60px]' />
                <div className=' mx-2 mr-[8vh]'>
                    <p className='text-3xl'>Hi, Sam store</p>
                    <p className=''>Store manager</p>
                </div>
            </div>
            <DashboardStatsGrid />
            <TransactionChart />
        </div>
    );
}

