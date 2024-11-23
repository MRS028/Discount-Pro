import React from 'react';
import NavBar from '../Header/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';


const AuthLayout = () => {
    return (
        <>
        <div className='bg-base-200 py-3'>
            <NavBar>
       </NavBar>
        </div>
        <div className=''><Outlet/></div>
       <Footer></Footer>
        </>
    );
};

export default AuthLayout;