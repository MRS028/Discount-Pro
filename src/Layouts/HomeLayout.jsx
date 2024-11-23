import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';


const HomeLayout = () => {
    return (
        <>
       <Header></Header>
        <section className='w-11/12 mx-auto'>
        
        <main>

        </main>
        
        </section>
        <section className='min-h-[calc(100vh-290px)] '>
        <Outlet></Outlet>
        </section>
        <footer>
            <Footer></Footer>
        </footer>
        
        </>
    );
};

export default HomeLayout;