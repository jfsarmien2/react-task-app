import React from "react";
import Logo from "../assets/logo.png";
import Button from "./Button";

type Props = {};

const Header = () => {
  return (
    <div className='flex flex-wrap sm:flex-row gap-5 items-center justify-between bg-gradient-to-r from-customBlue to-customPink drop-shadow-md px-5 py-5 md:py-2 text-white'>
      <img
        className='w-[70px] drop-shadow-md cursor-pointer'
        src={Logo}
        alt='Logo'
      />
      <div className='flex'>
        <Button
          text='Add New List Board'
          secondary
          className='border-2 border-white'
        />
      </div>
    </div>
  );
};

export default Header;
