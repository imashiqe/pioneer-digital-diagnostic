import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/image/logo.png"
import './Header.css';

const Header = () => {
    return (
        <div className="navbar   bg-gradient-to-r from-slate-100 to-green-500 fixed shadow-md  z-50 w-full   py-2 flex justify-between ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="red" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-300 rounded-box w-52">
        <Link to="/">Home</Link>
        <Link to="HealthCard">HealthCard</Link>
        <Link to='training'>Training</Link>
        <Link to='contact'>Contact Us</Link>
     
      </ul>
    </div>
      <Link to='/'><img className='logo' src={logo} /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to="/" className='pt-3'>Home</Link>
    
      <li><a>Doctors</a></li>
      <Link to="HealthCard" className='pt-3'>HealthCard</Link>
      <li tabIndex={0}>
        <a>
         Our Services
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-green-300">
          <Link className='hover:text-green-600'>All Services</Link>
          <Link className='hover:text-green-600'>Medical Lab Test</Link>
         <Link className='hover:text-green-600'>Vaccine Prices</Link>
        </ul>
      </li>
      <Link to='training' className='pt-3'>Training</Link>
      <li tabIndex={0}>
        <a>
         About Us
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-green-300">
          <Link to='ourspeech' className='hover:text-green-600'>Our Speech</Link>
          <Link className='hover:text-green-600'>Company Profile</Link>
          <Link className='hover:text-green-600'>Legal Papers</Link>

          
        </ul>
      </li>

      <Link to='contact' className='pt-3'>Contact Us</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <h3 className='text-white px-10 text-1xl'>
 Call Now: +88 01889991000 <br></br> Email : info@pioneerhsbd.com.

    </h3>


  </div>
</div>
    );
};

export default Header;