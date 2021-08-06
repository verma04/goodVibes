import React from 'react';

import HeroSection from './HeroSection/HeroSection';
import Showreel from './showreel/showreel'
import Footer from '../Footer/Footer'

function work({data}) {
    return (
        <div>
            <HeroSection/>
            <Showreel data1={data}/>

            <Footer/>
        </div>
    )
}



export default work
