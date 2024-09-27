import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

const NavbarTop = () => {
   // State to control sidebar visibility
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

   // Function to toggle sidebar
   const toggleSidebar = () => {
     setIsSidebarOpen(!isSidebarOpen);
   };
 
  return (
    <div className='border-b  bg-white py-4 '>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-red-700 font-bold text-4xl'>DevCluster</h1>
            {/* Menu Icon */}
          <IoMenu className="text-2xl lg:hidden block cursor-pointer" onClick={toggleSidebar} />
          </div>
          <div className='border p-4'>
            <h1 className='flex gap-2'><span className='my-auto'><FaUser/></span> user@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;