import React from 'react';
import HeroSection from './HeroSection/HeroSection'
import About from './About/About';
import Production from './Production/Production';
import Exp from './exp/exp';
import Showreel from './showreel/showreel';
import  Footer from '../Footer/Footer';
import Partner from './partner/partner';
import Featured from './featured/Featured';
import Vedio from './vedio/Vedio';
import Team from './Team/Team';
import Withus from './withus/with'
import Testimonials from './testimonials/Testimonials'
function Landing() {
    return (
        <div>
          <HeroSection/>
        
          <Production/> 
         
          <Exp/>
         
          <Showreel/>
          <Vedio/>
        <Team/>
        <Testimonials/>
          <Featured/>
          <Partner/>
          <Withus/>
          <Footer/>
          
        </div>
    )
}

export default Landing
