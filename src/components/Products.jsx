import React from 'react';
import { Link } from 'react-router-dom';
import people01 from '../assets/people01.png'; // Use default import for the image
import DashboardStatsGrid from './DashboardStatsGrid';
// import Shop from './shop';
import Shop from './Productcards';

export default function Products() {
    return (
        <div >

            <Shop />

        </div>
    );
}

