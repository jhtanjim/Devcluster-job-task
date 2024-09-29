import React, { useContext, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import Sidebar from '../Sidebar/Sidebar';
import { AuthContext } from '../Provider/AuthProvider';

const NavbarTop = () => {
  const { user } = useContext(AuthContext); // Get user from context
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='border-b bg-white py-4'>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='flex justify-between'>
          <div>
            <h1 className='text-red-700 font-bold text-4xl'>DevCluster</h1>
            <IoMenu className="text-2xl lg:hidden block cursor-pointer" onClick={toggleSidebar} />
          </div>
          <div className='border p-4'>
            <h1 className='flex gap-2'>
              <span className='my-auto'><FaUser /></span> 
              {user ? user.email : 'Guest'} {/* Conditional rendering for user email */}
            </h1>
          </div>
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[75%] bg-white z-40 shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform lg:hidden`}>
        <div className="p-4">
          <Sidebar />
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30" onClick={toggleSidebar}></div>
      )}
    </div>
  );
};

export default NavbarTop;
