import React from 'react';
import HeroSection from './HeroSection/HeroSection'
import About from './About/About';
import Production from '../Landing/Production/Production';
import Exp from '../Landing/exp/exp';
import Showreel from './showreel/showreel';
import  Footer from '../Footer/Footer';
import Partner from '../Landing/partner/partner';
import Featured from '../Landing/featured/Featured';
import Vedio from '../Landing/vedio/Vedio';
import Team from '../Landing/Team/Team';

import Testimonials from '../Landing/testimonials/Testimonials'
function Landing() {
    return (
        <div>
          <HeroSection/>
          <About/>
        
          <Production/>
         
          <Exp/>
         
          <Showreel/>
          <Vedio/>
        <Team/>
        <Testimonials/>
          <Featured/>
          <Partner/>
          <Footer/>
        </div>
    )
}

export default Landing
