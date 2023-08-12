import React, { useState } from 'react';
import BoxForm from './BoxForm';

const MemberPopup = (props) => {

  const {isOpen, setIsOpen} = props;

  return (
    <div className={`fixed z-[1000] top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center ${isOpen ? '' : 'hidden'}`}>
      <BoxForm setIsOpen={setIsOpen} />
    </div>
  );
};

export default MemberPopup;
