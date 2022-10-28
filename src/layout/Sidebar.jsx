import React, { useState } from "react";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdPrivacyTip, MdSell, MdOutlineSwapHoriz } from "react-icons/md";
import { BiPurchaseTag, BiAddToQueue } from "react-icons/bi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiTwotoneSetting } from "react-icons/ai";
import { NavLink,Link } from "react-router-dom";
import logo from "../images/logo.png";
import { VscThreeBars } from "react-icons/vsc";
const Sidebar = ({ setShowsidebar, showsidebar }) => {
  return (
    <div className="fixed w-full lg:w-60 top-0  z-50 bg-sr min-h-screen flex flex-col items-start justify-between pb-10 shadow-2xl">
      <div className="w-full hidden  lg:flex flex-col items-center gap-2 mt-6">
      <img
          className=" cursor-pointer w-48 object-contain my-4"
        
          src={logo}
          alt=""
        />
        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
             
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/"
          >
            <IoStatsChartSharp /> Dashboard
          </NavLink>
        </div>
        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
             
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/new-document"
          >
            <BiAddToQueue /> New Document
          </NavLink>
        </div>
        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
                
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/purchase-document"
          >
            <BiPurchaseTag /> Purchase Document
          </NavLink>
        </div>
        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
               
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/sales-document"
          >
            <MdSell /> Sales Document
          </NavLink>
        </div>

        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
               
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/resource-swap"
          >
            <MdOutlineSwapHoriz /> Resource Swap
          </NavLink>
        </div>
      </div>
      <div className="w-full flex  lg:hidden flex-col items-center gap-2 mt-6">
      <img
          className=" cursor-pointer w-48 object-contain my-4"
          onClick={()=>setShowsidebar(!showsidebar)}
          src={logo}
          alt=""
        />
        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
                onClick={()=>setShowsidebar(!showsidebar)}
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/"
          >
            <IoStatsChartSharp /> Dashboard
          </NavLink>
        </div>
        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
                onClick={()=>setShowsidebar(!showsidebar)}
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/new-document"
          >
            <BiAddToQueue /> New Document
          </NavLink>
        </div>
        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
                onClick={()=>setShowsidebar(!showsidebar)}
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/purchase-document"
          >
            <BiPurchaseTag /> Purchase Document
          </NavLink>
        </div>
        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
                onClick={()=>setShowsidebar(!showsidebar)}
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/sales-document"
          >
            <MdSell /> Sales Document
          </NavLink>
        </div>

        <div className="w-full  flex items-center justify-center px-3">
          <NavLink
            exact
                onClick={()=>setShowsidebar(!showsidebar)}
            activeClassName="w-full bg-nr text-white "
            className="py-2 flex items-center gap-2 px-2 text-gray-50 rounded-md hover:text-white hover:bg-tabelle w-full"
            to="/resource-swap"
          >
            <MdOutlineSwapHoriz /> Resource Swap
          </NavLink>
        </div>
      </div>
      <div className=" flex flex-col items-start justify-start gap-14 pl-5">
        {/* <div className=" cursor-pointer flex items-center gap-2 text-gray-100">
          <AiTwotoneSetting /> Settings
        </div> */}
        <div>
          <p className=" font-medium text-white text-sm">© Obius 2022</p>
          <p className=" text-gray-300 text-xs mt-2 pr-5">Obius ERP provides infrastructure for Web3</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
