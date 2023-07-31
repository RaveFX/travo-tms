import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoW, logoB, close, leftarrow, menu, dashboard, request, invitation, star, rating, message, user, settings } from '../assets'

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(true);
  const menus = [
    { title: "Dashboard", src: dashboard,route:"/",current:true },
    { title: "Requests", src: request ,route:"/travel_guide_request",current:false },
    { title: "Invitations", src: invitation , route:"/travel_guide_invitation",current:false },
    { title: "Ratings", src: star,route:"/travel_guide_rating",current:false  },
    { title: "Message", src: message ,route:"/travel_guide_request",current:false },
    { title: "Profile", src: user, gap: true,route:"/travel_guide_request",current:false  },
    { title: "Setting", src: settings ,route:"/travel_guide_request",current:false },
  ]
  return (
<<<<<<< Updated upstream
    <div className='flex bg-gradient-to-b sm:h-full from-[#377A85] to-[#72C075]'>
      <div className='sm:hidden flex  items-center  '>
=======
    <div className='flex h-full bg-gradient-to-b from-[#377A85] to-[#72C075]'>
      <div className='sm:hidden flex  items-center '>
>>>>>>> Stashed changes
        <div className='flex-col w-[25px]  m-[22px]'>
          <Link to={menu.route}>
        <img src={`${toggle ? close : menu}`} alt='menu' className=' w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)} />
        </Link>
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'}   absolute top-24 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='w-[35px]  py-5 '>
            {menus.map((menu, index) => (
              <li
                key={index}
                className={`text-white text-l flex items-center gap-x-4 ml-2
            cursor-pointer p-2 hover:bg-green w-full rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-green"}`}>
                
                {/* <Link to={menu.route} >{menu.src}</Link> */}
               <img src={`${menu.src}`}/>
                <Link to={menu.route} className={`${!open && 'hidden'} origin-left duration-300`} > {menu.title}</Link>

              </li>
            ))}

          </ul>
        </div>
      </div>
<<<<<<< Updated upstream
      <div className={`${open ? "w-72" : "w-20"} sm:inline hidden duration-300 h-screen pl-5 pt-8  relative `} >
=======
      <div className={`${open ? "w-72" : "w-20"} sm:inline hidden duration-300 h-screen pl-5 pt-8 relative `} >
>>>>>>> Stashed changes

        <img src={leftarrow} alt='leftarrow' className={`absolute cursor-pointer -right-3
       top-9 w-7  rounded-full  ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div className='flex gap-x-4 items-center'>

          <img src={`${open ? logoW : logoB}`} alt='logo' className={` cursor-pointer duration-300 item-center`} />


        </div>
        <div>
          <img src={`${toggle ? close : menu}`} alt='menu' className='sm:hidden flex w-[28px] h-[28px] object-contain' onClick={() => setToggle((prev) => !prev)} />
        </div>
        <ul className='w-[35px]  pt-6 '>
          {menus.map((menu, index) => (
            <li
              key={index}
              className={`text-white text-l flex items-center gap-x-4 
            cursor-pointer p-2 hover:bg-green w-full rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-green"}`}>
              <img src={`${menu.src} `} />
              <Link to={menu.route} className={`${!open && 'hidden'} origin-left duration-300`}> {menu.title}</Link>
            </li>
          ))}

        </ul>


      </div>
    </div>
  )
}

export default Sidebar