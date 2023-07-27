// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Sidebar from './Sidebar'
// import Header from './Header'


// export default function layout() {
//   return (
//     <div class="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
//       <Sidebar />
//       <div class="flex-1">
//         <Header />
//         <div className='min-h-0 overflow-auto'
//         >{<Outlet />}</div>
//       </div>
//     </div>
//   )
// }



import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function Layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="overflow-y-auto flex-1"> {/* Apply 'overflow-y-auto' class here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}
