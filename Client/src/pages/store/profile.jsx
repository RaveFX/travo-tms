import React from 'react'
import Sidebar from '../../components/store/sidebar';
import TopNavbar from '../../components/store/topNavbar';

export default function profile() {
    return (
        <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
            <Sidebar />
            <div className="flex flex-col flex-1">
                <TopNavbar />
                <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
                    <div>
                        profile
                    </div>
                </div>
            </div>
        </div>

    )
}
