import React from "react";
import Logo from "../assets/logo.png";

type Props = {};

const Header = () => {
  return (
    <div className='bg-gradient-to-r from-customBlue to-customPink drop-shadow-md px-5 py-5 md:py-2 text-white'>
      <img
        className='w-[70px] drop-shadow-md cursor-pointer'
        src={Logo}
        alt='Logo'
      />
    </div>
  );
};

export default Header;
