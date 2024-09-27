import React from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='pb-4'> 
      <Link to={'/addStudent'}><h1 className='flex gap-2 p-4 bg-[#f33823] text-white font-bold text-lg m-2  '><span className='my-auto'><FaUser/></span> Add Student</h1></Link>
      <Link to={'/managedStudent'}><h1 className='flex gap-2 my-2 p-4 bg-[#f33823] text-white font-bold text-lg m-2  '><span className='my-auto'><FaUser/></span> Managed Student</h1></Link>
      <Link><h1 className='flex gap-2 my-2 p-4 bg-[#f33823] text-white font-bold text-lg m-2  '><span className='my-auto'><FaUser/></span> Login</h1></Link>
    </div>
  );
};

export default Sidebar;