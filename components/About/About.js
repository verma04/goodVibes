import React from 'react';

import HeroSection from './HeroSection/HeroSection';
import Showreel from './Team/team';
import Footer from '../Footer/Footer'
import Producton from '../Landing/Production/Production'
import Partner from '../Landing/partner/partner'
function work() {
    return (
        <div>
            <HeroSection/>
            <Showreel/>
            <Producton/>
           
            <Partner/>
            <Footer/>
        </div>
    )
}

export default work
