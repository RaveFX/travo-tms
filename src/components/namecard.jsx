import React from "react";
import { Link } from "react-router-dom";

const Namecards = () => {
    return (
        <div className=' flex flex-row '>
        {/* <img src={people01} alt="people01" className='justify-start w-[60px] h-[60px]' /> */}
        {/* <img src="/ravindu.png" alt ="ravindu" className='justify-start w-[60px] h-[60px]' /> */}
        <div className=' mx-2 mr-[8vh]'>
            <p className='text-3xl '>Hi,Ravindu Viranga!</p>
            <p className=''>Activity Agent</p>
        </div>
    </div>
);

};

export default Namecards;