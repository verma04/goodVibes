import React from 'react';

import HeroSection from './HeroSection/HeroSection';
import Showreel from './Team/team';
import Footer from '../Footer/Footer'
import Producton from '../Landing/Production/Production'
import Partner from '../Landing/partner/partner'
import { useGetHome } from '@/apollo/actions';

function work({data}) {
   
    return (
        <div>
            <HeroSection/>
            <Showreel/>
            <Producton/>
           
            <Partner data={data} />
            <Footer/>
        </div>
    )
}

export default work
