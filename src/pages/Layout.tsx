import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className='h-[100vh] flex flex-col'>
      <Header />
      <div className='bg-pattern max-h-[90%] flex-1 overflow-y-scroll'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
