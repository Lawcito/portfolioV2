import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="h-screen bg-[#0D0A0B] flex-col font-geistMono text-[#F3EFF5]">
      <div className="flex w-full z-50 fixed top-0 justify-center">
        <Navbar />
      </div>
      <div className="relative h-screen">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
