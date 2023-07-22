import React from 'react';
import { Link } from 'react-router-dom';
import DashboardStatsGrid from './DashboardStatsGrid';
import TransactionChart from './TransactionChart';

export default function Dashboard() {
    return (
        <div className='flex flex-col gap-4'>
            <DashboardStatsGrid />
            <TransactionChart />
        </div>
    );
}
