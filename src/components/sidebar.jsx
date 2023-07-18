import { useState } from 'react'
import { logoW, logoB, close, leftarrow, menu, dashboard, request, invitation, star, rating, message, user, settings } from '../assets'

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(true);
  const menus = [
    { title: "Dashboard", src: dashboard },
    { title: "Requests", src: request },
    { title: "Invitations", src: invitation },
    { title: "Ratings", src: star },
    { title: "Message", src: message },
    { title: "Profile", src: user, gap: true },
    { title: "Setting", src: settings },
  ]
  return (
    <div className='flex'>
      <div className='sm:hidden flex bg-gradient-to-b from-[#377A85] to-[#72C075] items-center p-6'>
        <img src={`${toggle ? close : menu}`} alt='menu' className=' w-[28px] h-[28px] object-contain ' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'}  bg-gradient-to-b from-[#377A85] to-[#72C075] absolute top-24 left-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className='w-[35px]  py-5 '>
            {menus.map((menu, index) => (
              <li
                key={index}
                className={`text-white text-l flex items-center gap-x-4 ml-2
            cursor-pointer p-2 hover:bg-green w-full rounded-md ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-green"}`}>
                <img src={`${menu.src} `} />
                <span className={`${!open && 'hidden'} origin-left duration-300`}> {menu.title}</span>
              </li>
            ))}

          </ul>
        </div>
      </div>
      <div className={`${open ? "w-72" : "w-20"} sm:inline hidden duration-300 h-screen pl-5 pt-8 bg-gradient-to-b from-[#377A85] to-[#72C075] relative `} >

        <img src={leftarrow} alt='leftarrow' className={`absolute cursor-pointer -right-3
       top-9 w-7 border-2 rounded-full bg-green border-green ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
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
              <span className={`${!open && 'hidden'} origin-left duration-300`}> {menu.title}</span>
            </li>
          ))}

        </ul>


      </div>

      <div className='p-7 text-2xl w-full font-semibold flex bg-white'>
        <h1>Home Page</h1>
      </div>
    </div>
  )
}

export default Sidebar