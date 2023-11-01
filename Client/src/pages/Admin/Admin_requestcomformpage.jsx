
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

import TopNavbar from '../../components/admin/topNavbar';
import Sidebar from '../../components/admin/sidebar';

export default function Admin_requestcomformpage() {
    return (
        <div>

            <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
                <Sidebar />

                <div className="flex flex-col flex-1">
                    <TopNavbar />

                    hhh

                </div>
            </div>








        </div>
    )
}
