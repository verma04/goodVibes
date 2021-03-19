import React from 'react';
import HeroSection from './HeroSection/HeroSection'
import About from './About/About';
import Production from './Production/Production';
import Exp from './exp/exp';
import Showreel from './showreel/showreel';
import  Footer from '../Footer/Footer';
import Partner from './partner/partner';
import Featured from './featured/Featured'
function Landing() {
    return (
        <div>
          <HeroSection/>
          <About/>
          <Production/>
        
          <Exp/>
          <Showreel/>
          <Featured/>
          <Partner/>
          <Footer/>
        </div>
    )
}

export default Landing
