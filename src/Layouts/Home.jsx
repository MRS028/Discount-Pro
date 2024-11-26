import React, { useEffect, useState } from 'react';
import Slider from "../Layouts/Slider"
import TopBrands from '../Components/Brands/TopBrands';
import BrandsOnSell from '../Components/Brands/BrandsOnSell';

import FeaturedBrands from '../Components/Brands/FeaturedBrands';
import BrandExtrapage from '../Components/Brands/BrandExtrapage';
import { toast } from 'react-toastify';
import AboutUs from './AboutUs';


const Home = () => {
    const [brand, setBrand] = useState([]);
    

    useEffect(() => {
       
        fetch("/coupons.json")
            .then(res => res.json())
            .then(data => {
                // console.log("Loaded Data:", data); 
                setBrand(data);
            })
            .catch(err => toast.error("Failed to fetch data:", err));
    }, []);

    return (
        <div>
             <section className="w-11/12 mx-auto items-center">
                <main>
                    <Slider />
                    <TopBrands brand={brand} />
                    <BrandsOnSell brands={brand}></BrandsOnSell>
                   
                    <FeaturedBrands brands={brand}></FeaturedBrands>
                
                    <BrandExtrapage brands={brand}></BrandExtrapage>
                    
                    
                </main>
            </section>
            
        </div>
    );
};

export default Home;