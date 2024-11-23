import React from 'react';
import { FaHome, FaInfoCircle, FaTags, FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '/public/Images/logod.png';
const NavBar = () => {
    const link = <>
    <li>
    <NavLink to="/">
    <p className="flex items-center gap-2">
              <FaHome />
              Home
            </p>
              </NavLink>
          </li>
          <li><NavLink to="/brands">
            <p className="flex items-center gap-2">
              <FaTags />
              Brands
            </p></NavLink>
          </li>
          <li>
          <NavLink to="/6">
          <p className="flex items-center gap-2">
              <FaUserCircle />
              My Profile
            </p>
              </NavLink>
          </li>
          <li><NavLink to="/2">
            <p className="flex items-center space-x-2">
              <FaInfoCircle />About Dev
              
               </p>
              </NavLink>
           
          </li>
    </>

    

    return (
        <div className="navbar w-11/12 mx-auto ">
      {/* Navbar Start: Logo */}
      <div className="navbar-start text-center lg:text-left">
        
        <div className="dropdown lg:hidden">
        <button
          tabIndex={0}
          role="button"
          className="btn btn-ghost flex lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
            {link}
          
        </ul>
      </div>
      <img className='w-10 h-10 hidden md:flex' src={logo} alt="" />
     <Link to='/'> <p className="md:flex normal-case md:text-2xl font-semibold">Discount Pro</p></Link>
      </div>

      {/* Mobile Navigation */}
     

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {link}
        </ul>
      </div>

      {/* Authentication Buttons */}
      <div className="navbar-end">
        <div className="hidden lg:flex items-center space-x-4">
          <Link to='/auth/login'><button className="btn btn-outline">Login</button></Link>
          <Link to='/auth/register'><button className="btn btn-primary">Register</button></Link>
          
        </div>

        <div className="lg:hidden flex items-center">
          <Link to="/auth/login"><button className="btn btn-outline btn-sm">Login</button></Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;