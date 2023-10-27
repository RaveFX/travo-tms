

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

import TopNavbar from '../../components/admin/topNavbar';
import Sidebar from '../../components/admin/sidebar';
import axios from 'axios';


export default function Admin_Userprofile() {

    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />

            <div className="flex flex-col flex-1">
                <TopNavbar />
            </div>
        </div>
    );
}

