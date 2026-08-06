import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer'; 

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-industrialGray">
      <Navbar />
        <Outlet />
      <Footer />
    </div>
  );
}
