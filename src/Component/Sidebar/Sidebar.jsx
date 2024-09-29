import React, { useContext } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };
  return (
    <div className='pb-4'> 
      <Link to={'/addStudent'}><h1 className='flex gap-2 p-4 bg-[#f33823] text-white font-bold text-lg m-2  '><span className='my-auto'><FaUser/></span> Add Student</h1></Link>
      <Link to={'/managedStudent'}><h1 className='flex gap-2 my-2 p-4 bg-[#f33823] text-white font-bold text-lg m-2  '><span className='my-auto'><FaUser/></span> Managed Student</h1></Link>
      {user ? (
          <Link className='flex gap-2 my-2 p-4 bg-[#f33823] text-white font-bold text-lg m-2  ' onClick={handleLogout} >
            LogOut
          </Link>
        ) : (
          <Link className='flex gap-2 my-2 p-4 bg-[#f33823] text-white font-bold text-lg m-2  ' to="/login">
            Login
          </Link>
        )}
    </div>
  );
};

export default Sidebar;